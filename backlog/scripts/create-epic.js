#!/usr/bin/env node

/**
 * Epic Creation Script
 * 
 * Creates a new epic folder structure with:
 * - Epic markdown file
 * - User stories directory
 * - Git branch from master
 * 
 * Usage: node scripts/create-epic.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function ensureBacklogStructure() {
  const backlogDir = path.join(__dirname, '..');
  const epicsDir = path.join(backlogDir, 'epics');
  
  // Create backlog directory if it doesn't exist
  if (!fs.existsSync(backlogDir)) {
    fs.mkdirSync(backlogDir, { recursive: true });
    console.log('📁 Created backlog directory');
  }
  
  // Create epics directory if it doesn't exist
  if (!fs.existsSync(epicsDir)) {
    fs.mkdirSync(epicsDir, { recursive: true });
    console.log('📁 Created epics directory');
  }
  
  return epicsDir;
}

function getNextEpicNumber() {
  const epicsDir = ensureBacklogStructure();
  
  if (!fs.existsSync(epicsDir)) {
    return 1;
  }
  
  const epics = fs.readdirSync(epicsDir)
    .filter(name => name.startsWith('EPIC-'))
    .map(name => parseInt(name.split('-')[1]))
    .filter(num => !isNaN(num));
  
  return epics.length > 0 ? Math.max(...epics) + 1 : 1;
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createGitBranch(epicNumber, epicName) {
  try {
    const branchName = `epic/${String(epicNumber).padStart(3, '0')}-${toKebabCase(epicName)}`;
    
    // Check if on master/main
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
    
    if (currentBranch !== 'master' && currentBranch !== 'main') {
      console.log(`\n⚠️  Warning: Not on master/main branch (currently on ${currentBranch})`);
      console.log(`   Please checkout master first if you want to branch from master.`);
    }
    
    // Create and checkout new branch
    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
    console.log(`\n✅ Created and checked out branch: ${branchName}`);
    
    return branchName;
  } catch (error) {
    console.error(`\n❌ Git branch creation failed: ${error.message}`);
    console.log('   You can create the branch manually later.');
    return null;
  }
}

async function createEpic() {
  console.log('\n🚀 Epic Creation Wizard\n');
  console.log('This will create a new epic folder with template files and a git branch.\n');
  
  // Get epic number
  const nextNumber = getNextEpicNumber();
  const epicNumber = await prompt(`Epic number (default: ${nextNumber}): `) || nextNumber;
  const paddedNumber = String(epicNumber).padStart(3, '0');
  
  // Get epic name
  const epicName = await prompt('Epic name (e.g., "interactive-map-leaflet"): ');
  if (!epicName) {
    console.error('❌ Epic name is required');
    rl.close();
    return;
  }
  
  // Get epic title
  const epicTitle = await prompt('Epic title (e.g., "Interactive Map Implementation"): ');
  if (!epicTitle) {
    console.error('❌ Epic title is required');
    rl.close();
    return;
  }
  
  // Get other details
  const priority = await prompt('Priority (High/Medium/Low, default: Medium): ') || 'Medium';
  const storyPoints = await prompt('Estimated story points (default: 5): ') || '5';
  const targetWeek = await prompt('Target completion (e.g., "Week 2", default: "TBD"): ') || 'TBD';
  
  // Create git branch?
  const createBranch = await prompt('Create git branch from master? (y/n, default: y): ') || 'y';
  
  rl.close();
  
  // Ensure backlog structure exists
  const epicsDir = ensureBacklogStructure();
  
  // Create epic folder
  const epicFolderName = `EPIC-${paddedNumber}-${toKebabCase(epicName)}`;
  const epicDir = path.join(epicsDir, epicFolderName);
  
  if (fs.existsSync(epicDir)) {
    console.error(`\n❌ Epic folder already exists: ${epicFolderName}`);
    return;
  }
  
  console.log(`\n📁 Creating epic folder: ${epicFolderName}`);
  fs.mkdirSync(epicDir, { recursive: true });
  
  // Create user-stories directory
  const userStoriesDir = path.join(epicDir, 'user-stories');
  fs.mkdirSync(userStoriesDir, { recursive: true });
  console.log('📁 Created user-stories directory');
  
  // Read template
  const templatePath = path.join(__dirname, '../templates/epic-template/epic.md');
  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // Replace placeholders
  const today = new Date().toISOString().split('T')[0];
  template = template
    .replace(/EPIC-XXX/g, `EPIC-${paddedNumber}`)
    .replace(/\[Epic Title\]/g, epicTitle)
    .replace(/\[High\/Medium\/Low\]/g, priority)
    .replace(/\[Total points\]/g, storyPoints)
    .replace(/\[Week\/Date\]/g, targetWeek)
    .replace(/\[YYYY-MM-DD\]/g, today)
    .replace(/epic\/XXX-epic-name/g, `epic/${paddedNumber}-${toKebabCase(epicName)}`);
  
  // Write epic.md
  const epicFilePath = path.join(epicDir, 'epic.md');
  fs.writeFileSync(epicFilePath, template);
  console.log('📝 Created epic.md from template');
  
  // Create git branch
  let branchName = null;
  if (createBranch.toLowerCase() === 'y') {
    branchName = createGitBranch(epicNumber, epicName);
  }
  
  // Success message
  console.log('\n✅ Epic created successfully!\n');
  console.log('📍 Location:', epicDir);
  console.log('📄 Edit:', epicFilePath);
  if (branchName) {
    console.log('🌿 Git branch:', branchName);
  }
  console.log('\n📋 Next steps:');
  console.log('1. Edit epic.md to fill in details');
  console.log('2. Run "node scripts/create-user-story.js" to add user stories');
  console.log('3. Start working on tasks');
  console.log('');
}

// Run the script
createEpic().catch(error => {
  console.error('❌ Error:', error.message);
  rl.close();
  process.exit(1);
});
