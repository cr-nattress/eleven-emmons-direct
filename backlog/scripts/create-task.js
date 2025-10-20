#!/usr/bin/env node

/**
 * Task Creation Script
 * 
 * Creates a new task markdown file within a user story:
 * - Task markdown file with agent prompt template
 * 
 * Usage: node scripts/create-task.js [EPIC-XXX] [US-XXX]
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
    const epics = fs.readdirSync(epicsDir)
      .filter(name => name.startsWith('EPIC-'))
      .sort();
    return epics;
  }
  
  const epics = fs.readdirSync(epicsDir)
    .filter(name => name.startsWith(epicIdentifier))
    .sort();
  
  if (epics.length === 0) {
    return null;
  }
  
  return epics[0];
}

function findUserStory(epicDir, storyIdentifier) {
  const userStoriesDir = path.join(epicDir, 'user-stories');
  
  if (!fs.existsSync(userStoriesDir)) {
    return null;
  }
  
  if (!storyIdentifier) {
    const stories = fs.readdirSync(userStoriesDir)
      .filter(name => name.startsWith('US-'))
      .sort();
    return stories;
  }
  
  const stories = fs.readdirSync(userStoriesDir)
    .filter(name => name.startsWith(storyIdentifier))
    .sort();
  
  if (stories.length === 0) {
    return null;
  }
  
  return stories[0];
}

function getNextTaskNumber(storyDir) {
  const tasksDir = path.join(storyDir, 'tasks');
  
  if (!fs.existsSync(tasksDir)) {
    return 1;
  }
  
  const tasks = fs.readdirSync(tasksDir)
    .filter(name => name.startsWith('TASK-') && name.endsWith('.md'))
    .map(name => parseInt(name.split('-')[1]))
    .filter(num => !isNaN(num));
  
  return tasks.length > 0 ? Math.max(...tasks) + 1 : 1;
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function createTask() {
  console.log('\n✅ Task Creation Wizard\n');
  
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
  
  const epicDir = path.join(__dirname, '../epics', epicFolder);
  
  // Get user story
  const storyArg = process.argv[3];
  let storyFolder;
  
  if (!storyArg) {
    const stories = findUserStory(epicDir, null);
    if (!stories || stories.length === 0) {
      console.error('❌ No user stories found. Create a user story first.');
      rl.close();
      return;
    }
    
    console.log(`\n📁 Epic: ${epicFolder}`);
    console.log('\nAvailable user stories:');
    stories.forEach((story, i) => {
      console.log(`  ${i + 1}. ${story}`);
    });
    console.log('');
    
    const selection = await prompt('Select user story number: ');
    const index = parseInt(selection) - 1;
    
    if (index < 0 || index >= stories.length) {
      console.error('❌ Invalid selection');
      rl.close();
      return;
    }
    
    storyFolder = stories[index];
  } else {
    storyFolder = findUserStory(epicDir, storyArg);
    if (!storyFolder) {
      console.error(`❌ User story not found: ${storyArg}`);
      rl.close();
      return;
    }
  }
  
  console.log(`\n📖 User Story: ${storyFolder}\n`);
  
  const storyDir = path.join(epicDir, 'user-stories', storyFolder);
  const nextNumber = getNextTaskNumber(storyDir);
  
  // Get task details
  const taskNumber = await prompt(`Task number (default: ${nextNumber}): `) || nextNumber;
  const paddedNumber = String(taskNumber).padStart(3, '0');
  
  const taskName = await prompt('Task name (e.g., "install-dependencies"): ');
  if (!taskName) {
    console.error('❌ Task name is required');
    rl.close();
    return;
  }
  
  const taskTitle = await prompt('Task title (e.g., "Install Dependencies"): ');
  if (!taskTitle) {
    console.error('❌ Task title is required');
    rl.close();
    return;
  }
  
  const priority = await prompt('Priority (High/Medium/Low, default: Medium): ') || 'Medium';
  const estimatedTime = await prompt('Estimated time (e.g., "30 minutes", "2 hours"): ') || '30 minutes';
  
  rl.close();
  
  // Create task file
  const taskFileName = `TASK-${paddedNumber}-${toKebabCase(taskName)}.md`;
  const taskFilePath = path.join(storyDir, 'tasks', taskFileName);
  
  if (fs.existsSync(taskFilePath)) {
    console.error(`\n❌ Task file already exists: ${taskFileName}`);
    return;
  }
  
  console.log(`\n📄 Creating task file: ${taskFileName}`);
  
  // Read template
  const templatePath = path.join(__dirname, '../templates/task-template.md');
  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // Replace placeholders
  const today = new Date().toISOString().split('T')[0];
  const storyNumber = storyFolder.match(/US-(\d+)/)[1];
  
  template = template
    .replace(/TASK-XXX/g, `TASK-${paddedNumber}`)
    .replace(/\[Task Title\]/g, taskTitle)
    .replace(/\[High\/Medium\/Low\]/g, priority)
    .replace(/\[X minutes\/hours\]/g, estimatedTime)
    .replace(/\[YYYY-MM-DD\]/g, today)
    .replace(/US-XXX/g, `US-${storyNumber}`);
  
  // Write task file
  fs.writeFileSync(taskFilePath, template);
  console.log('📝 Created task file from template');
  
  // Success message
  console.log('\n✅ Task created successfully!\n');
  console.log('📍 Location:', taskFilePath);
  console.log('📄 Edit:', taskFilePath);
  console.log('\n📋 Next steps:');
  console.log('1. Edit task file to fill in agent prompt');
  console.log('2. Add implementation steps and verification');
  console.log('3. Copy agent prompt to AI assistant to execute');
  console.log('');
}

// Run the script
createTask().catch(error => {
  console.error('❌ Error:', error.message);
  rl.close();
  process.exit(1);
});
