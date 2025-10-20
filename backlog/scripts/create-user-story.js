#!/usr/bin/env node

/**
 * User Story Creation Script
 * 
 * Creates a new user story folder structure within an epic:
 * - User story markdown file
 * - Tasks directory
 * 
 * Usage: node scripts/create-user-story.js [EPIC-XXX]
 */

const fs = require('fs');
const path = require('path');
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

function findEpic(epicIdentifier) {
  const epicsDir = path.join(__dirname, '../epics');
  
  if (!epicIdentifier) {
    // List available epics
    const epics = fs.readdirSync(epicsDir)
      .filter(name => name.startsWith('EPIC-'))
      .sort();
    return epics;
  }
  
  // Find specific epic
  const epics = fs.readdirSync(epicsDir)
    .filter(name => name.startsWith(epicIdentifier))
    .sort();
  
  if (epics.length === 0) {
    return null;
  }
  
  return epics[0];
}

function getNextStoryNumber(epicDir) {
  const userStoriesDir = path.join(epicDir, 'user-stories');
  
  if (!fs.existsSync(userStoriesDir)) {
    return 1;
  }
  
  const stories = fs.readdirSync(userStoriesDir)
    .filter(name => name.startsWith('US-'))
    .map(name => parseInt(name.split('-')[1]))
    .filter(num => !isNaN(num));
  
  return stories.length > 0 ? Math.max(...stories) + 1 : 1;
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function createUserStory() {
  console.log('\n📖 User Story Creation Wizard\n');
  
  // Get epic
  const epicArg = process.argv[2];
  let epicFolder;
  
  if (!epicArg) {
    const epics = findEpic(null);
    if (epics.length === 0) {
      console.error('❌ No epics found. Create an epic first.');
      rl.close();
      return;
    }
    
    console.log('Available epics:');
    epics.forEach((epic, i) => {
      console.log(`  ${i + 1}. ${epic}`);
    });
    console.log('');
    
    const selection = await prompt('Select epic number: ');
    const index = parseInt(selection) - 1;
    
    if (index < 0 || index >= epics.length) {
      console.error('❌ Invalid selection');
      rl.close();
      return;
    }
    
    epicFolder = epics[index];
  } else {
    epicFolder = findEpic(epicArg);
    if (!epicFolder) {
      console.error(`❌ Epic not found: ${epicArg}`);
      rl.close();
      return;
    }
  }
  
  console.log(`\n📁 Epic: ${epicFolder}\n`);
  
  const epicDir = path.join(__dirname, '../epics', epicFolder);
  const nextNumber = getNextStoryNumber(epicDir);
  
  // Get story details
  const storyNumber = await prompt(`Story number (default: ${nextNumber}): `) || nextNumber;
  const paddedNumber = String(storyNumber).padStart(3, '0');
  
  const storyName = await prompt('Story name (e.g., "setup-basic-map"): ');
  if (!storyName) {
    console.error('❌ Story name is required');
    rl.close();
    return;
  }
  
  const storyTitle = await prompt('Story title (e.g., "Setup Leaflet and Create Basic Map"): ');
  if (!storyTitle) {
    console.error('❌ Story title is required');
    rl.close();
    return;
  }
  
  const priority = await prompt('Priority (High/Medium/Low, default: Medium): ') || 'Medium';
  const storyPoints = await prompt('Story points (1/2/3/5/8, default: 2): ') || '2';
  const sprint = await prompt('Sprint/Week (default: "TBD"): ') || 'TBD';
  
  rl.close();
  
  // Create user story folder
  const storyFolderName = `US-${paddedNumber}-${toKebabCase(storyName)}`;
  const storyDir = path.join(epicDir, 'user-stories', storyFolderName);
  
  if (fs.existsSync(storyDir)) {
    console.error(`\n❌ User story folder already exists: ${storyFolderName}`);
    return;
  }
  
  console.log(`\n📁 Creating user story folder: ${storyFolderName}`);
  fs.mkdirSync(storyDir, { recursive: true });
  
  // Create tasks directory
  const tasksDir = path.join(storyDir, 'tasks');
  fs.mkdirSync(tasksDir, { recursive: true });
  console.log('📁 Created tasks directory');
  
  // Read template
  const templatePath = path.join(__dirname, '../templates/user-story-template/story.md');
  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // Replace placeholders
  const today = new Date().toISOString().split('T')[0];
  const epicNumber = epicFolder.match(/EPIC-(\d+)/)[1];
  
  template = template
    .replace(/US-XXX/g, `US-${paddedNumber}`)
    .replace(/\[User Story Title\]/g, storyTitle)
    .replace(/\[High\/Medium\/Low\]/g, priority)
    .replace(/\[1\/2\/3\/5\/8\]/g, storyPoints)
    .replace(/\[Week\/Sprint number\]/g, sprint)
    .replace(/\[YYYY-MM-DD\]/g, today)
    .replace(/EPIC-XXX/g, `EPIC-${epicNumber}`);
  
  // Write story.md
  const storyFilePath = path.join(storyDir, 'story.md');
  fs.writeFileSync(storyFilePath, template);
  console.log('📝 Created story.md from template');
  
  // Success message
  console.log('\n✅ User story created successfully!\n');
  console.log('📍 Location:', storyDir);
  console.log('📄 Edit:', storyFilePath);
  console.log('\n📋 Next steps:');
  console.log('1. Edit story.md to fill in acceptance criteria');
  console.log('2. Run "node scripts/create-task.js" to add tasks');
  console.log('3. Start implementing tasks');
  console.log('');
}

// Run the script
createUserStory().catch(error => {
  console.error('❌ Error:', error.message);
  rl.close();
  process.exit(1);
});
