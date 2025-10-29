# Backlog Template System - Complete Usage Guide

## Overview

This template system helps you create structured, consistent epics, user stories, and tasks with:

- **Pre-filled templates** following project conventions
- **Automated scripts** for folder/file creation
- **Git branch management** for epic-based development
- **Agent prompts** ready for AI coding assistants

---

## Table of Contents

1. [Quick Commands](#quick-commands)
2. [Detailed Workflow](#detailed-workflow)
3. [Template Structure](#template-structure)
4. [Agent Prompt Guidelines](#agent-prompt-guidelines)
5. [Git Branch Strategy](#git-branch-strategy)
6. [Examples](#examples)
7. [Tips & Tricks](#tips--tricks)

---

## Quick Commands

### Using NPM Scripts (Recommended)

```bash
# Create a new epic with git branch
npm run epic:create

# Create a user story within an epic
npm run story:create

# Create a task within a user story
npm run task:create
```

### Using Node Directly

```bash
# Create epic
node backlog/scripts/create-epic.js

# Create user story (with optional epic number)
node backlog/scripts/create-user-story.js [EPIC-XXX]

# Create task (with optional epic and story numbers)
node backlog/scripts/create-task.js [EPIC-XXX] [US-XXX]
```

---

## Detailed Workflow

### Phase 1: Plan the Epic

**Before running scripts:**

1. Define the high-level feature/initiative
2. Identify business value and goals
3. Break down into 3-5 user stories
4. Estimate total story points

**Run epic creation:**

```bash
npm run epic:create
```

**Fill in epic.md:**

- Business value section
- Current vs target state
- Success metrics
- Dependencies and risks
- List user stories (even if not created yet)

### Phase 2: Create User Stories

**For each user story in the epic:**

```bash
npm run story:create
```

**Fill in story.md:**

- User story in "As a... I want... So that..." format
- Specific, testable acceptance criteria
- Technical notes and considerations
- Break down into 3-5 tasks

### Phase 3: Create Tasks

**For each task in the user story:**

```bash
npm run task:create
```

**Fill in task.md:**

- **Agent Prompt** - Detailed, copy-paste ready prompt
- Implementation steps with exact commands
- Verification steps to check completion
- Troubleshooting for common issues
- Expected output examples

### Phase 4: Execute Tasks

**For each task:**

1. Open task markdown file
2. Read task description and context
3. Copy "Agent Prompt" section
4. Paste into AI coding assistant (Claude, ChatGPT, Cursor, etc.)
5. Review and execute suggested changes
6. Run verification steps
7. Mark task as complete in file (change status to "Done")
8. Commit changes to git

**Repeat until all tasks done → Story complete → Epic complete!**

---

## Template Structure

### Epic Template

```markdown
# EPIC-XXX: [Epic Title]

**Status**: To Do  
**Priority**: High/Medium/Low  
**Estimated Story Points**: [Total]  
**Target Completion**: [Week/Date]

## Epic Overview

[Business goal and description]

## Business Value

- Key benefits

## User Stories

1. US-001: [Title] (X points)
2. US-002: [Title] (X points)

## Acceptance Criteria

- [ ] Major requirements

## Success Metrics

- Measurable goals

## Dependencies

- Technical dependencies

## Risks

- Identified risks with mitigation

## Related Epics

- Other related work
```

### User Story Template

```markdown
# US-XXX: [Story Title]

**Status**: To Do  
**Priority**: High/Medium/Low  
**Story Points**: 1/2/3/5/8  
**Sprint**: [Week/Sprint]

## User Story

**As a** [user]  
**I want** [goal]  
**So that** [benefit]

## Acceptance Criteria

- [ ] Testable criteria

## Technical Notes

- Implementation details

## Definition of Done

- [ ] Completion checklist

## Tasks

1. TASK-001: [Title]
2. TASK-002: [Title]
```

### Task Template

```markdown
# TASK-XXX: [Task Title]

**Status**: To Do  
**Priority**: High/Medium/Low  
**Estimated Time**: [Duration]

## Task Description

[What needs to be done]

## Agent Prompt
```

[Copy-paste ready prompt for AI assistant]

Context:

- Project details

Task:

1. Specific steps

Requirements:

- Exact requirements

Verification:

- How to verify

```

## Implementation Steps
1. Step-by-step instructions

## Verification Steps
1. How to check completion

## Expected Output
```

[Example output]

```

## Troubleshooting
- Common issues and solutions
```

---

## Agent Prompt Guidelines

### What Makes a Good Agent Prompt?

**✅ DO:**

- Be extremely specific and detailed
- Include exact commands to run
- Provide project context (tech stack, structure)
- List all requirements explicitly
- Add verification steps
- Include expected output examples
- Document edge cases

**❌ DON'T:**

- Be vague or generic
- Assume knowledge
- Skip error handling
- Leave things ambiguous
- Forget verification

### Example: Good vs Bad

**❌ Bad Agent Prompt:**

```
Install the map library and set it up.
```

**✅ Good Agent Prompt:**

```
Install React-Leaflet and Leaflet packages for Next.js 14 project.

Context:
- Project uses Next.js 14 with App Router
- Project uses TypeScript 5.x
- React 18 already installed
- Need interactive map component

Task:
1. Navigate to project root: cd /path/to/project
2. Install runtime packages: npm install react-leaflet leaflet
3. Install TypeScript types: npm install --save-dev @types/leaflet
4. Verify installation: npm list react-leaflet leaflet @types/leaflet

Requirements:
- Use npm (not yarn) to match existing project
- Install react-leaflet version 4.2.x or higher
- Install leaflet version 1.9.x or higher
- Types should go in devDependencies

Verification:
- package.json shows react-leaflet in dependencies
- package.json shows leaflet in dependencies
- package.json shows @types/leaflet in devDependencies
- No error messages during installation
- node_modules contains all three packages

Expected Output:
+ react-leaflet@4.2.1
+ leaflet@1.9.4
+ @types/leaflet@1.9.8
```

### Template for Agent Prompts

```
[One sentence task objective]

Context:
- [Relevant project context 1]
- [Relevant project context 2]
- [Current tech stack details]
- [Any constraints or requirements]

Task:
1. [Specific action 1 with exact command]
2. [Specific action 2 with exact command]
3. [Specific action 3]
4. [Verification step]

Requirements:
- [Specific requirement 1]
- [Specific requirement 2]
- [Code style or convention to follow]
- [Performance/quality requirement]

Verification:
- [How to verify step 1]
- [How to verify step 2]
- [Expected final outcome]
```

---

## Git Branch Strategy

### Epic Branches

**Convention**: `epic/XXX-name`

**Created from**: `master` (or `main`)

**Example**: `epic/010-photo-gallery`

**When to create:**

- At the start of each new epic
- Before any user story work begins
- Scripts auto-create during epic creation

**Benefits:**

- Isolates epic work from master
- Easy to merge entire epic when complete
- Clear separation of features

### Feature Branches (Optional)

**Convention**: `feature/US-XXX-name`

**Created from**: Epic branch

**Example**: `feature/US-001-setup-basic-map`

**When to create:**

- For complex user stories
- When multiple developers work on same epic
- For stories requiring review before epic merge

### Workflow

```bash
# 1. Create epic (script does this automatically)
git checkout master
git checkout -b epic/010-photo-gallery

# 2. Work on tasks directly in epic branch
git add .
git commit -m "Complete TASK-001: Create gallery component"
git push origin epic/010-photo-gallery

# 3. When epic complete, merge to master
git checkout master
git merge epic/010-photo-gallery
git push origin master
```

---

## Examples

### Example 1: Simple Feature

**Goal**: Add a contact form to the website

```bash
# 1. Create epic
$ npm run epic:create
Epic number: 11
Epic name: contact-form
Epic title: Contact Form Implementation
Priority: Medium
Story points: 5
Target: Week 4
Create branch? y

# 2. Create user stories
$ npm run story:create
Epic: EPIC-011-contact-form
Story number: 1
Story name: design-form-component
Story title: Design and Build Form Component
Priority: High
Story points: 2

$ npm run story:create
Epic: EPIC-011-contact-form
Story number: 2
Story name: add-email-service
Story title: Integrate Email Service
Priority: High
Story points: 2

# 3. Create tasks for first story
$ npm run task:create
Epic: EPIC-011
Story: US-001
Task number: 1
Task name: create-form-component
Task title: Create Form Component File

$ npm run task:create
Epic: EPIC-011
Story: US-001
Task number: 2
Task name: add-form-validation
Task title: Add Form Validation Logic

# 4. Execute tasks using agent prompts
# ... work through each task ...

# 5. Merge when complete
git checkout master
git merge epic/011-contact-form
```

### Example 2: Large Feature with Multiple Stories

**Goal**: Build complete photo gallery system

```bash
# Epic: Photo Gallery (8 story points)
# ├── US-001: Design Gallery Layout (3 points)
# │   ├── TASK-001: Create gallery component
# │   ├── TASK-002: Style grid layout
# │   └── TASK-003: Add responsive breakpoints
# ├── US-002: Implement Lightbox (3 points)
# │   ├── TASK-001: Install lightbox library
# │   ├── TASK-002: Create lightbox component
# │   └── TASK-003: Add keyboard navigation
# └── US-003: Image Optimization (2 points)
#     ├── TASK-001: Add lazy loading
#     └── TASK-002: Generate thumbnails
```

---

## Tips & Tricks

### Numbering

- **Auto-increment**: Scripts suggest next available number
- **Custom numbers**: You can specify any number
- **Gaps are OK**: Numbers are for organization, not strict sequence
- **Restart numbering**: Each epic/story has its own numbering (US-001 in every epic)

### Naming Conventions

**Epic Names** (kebab-case):

- ✅ `interactive-map-leaflet`
- ✅ `photo-gallery`
- ✅ `seo-optimization`
- ❌ `Interactive Map`
- ❌ `photo_gallery`

**Story Names** (kebab-case):

- ✅ `setup-basic-map`
- ✅ `design-gallery-layout`
- ❌ `setupBasicMap`
- ❌ `Setup Basic Map`

**Task Names** (kebab-case):

- ✅ `install-dependencies`
- ✅ `create-map-component`
- ❌ `install_dependencies`

### When to Create Tasks

**DO create tasks for:**

- Installing packages
- Creating new files/components
- Modifying configuration
- Writing tests
- Deployment steps
- Documentation updates

**DON'T create tasks for:**

- Every single line of code
- Obvious sub-steps (e.g., "open file editor")
- Things that take < 5 minutes
- Trivial edits

**Good task size**: 15 minutes to 2 hours

### Reusing Templates

**Copy existing well-written tasks:**

1. Find a similar completed task
2. Copy the file
3. Rename and modify
4. Keep the good agent prompt structure

**Create custom templates:**

- Common patterns (e.g., "Install Package Template")
- Your team's specific needs
- Language/framework specific

### Working with AI Assistants

**Best practices:**

1. Copy entire "Agent Prompt" section
2. Paste into AI assistant
3. Let it execute, review changes
4. Run verification steps yourself
5. Iterate if needed

**Supported assistants:**

- Claude (Anthropic)
- ChatGPT (OpenAI)
- GitHub Copilot Chat
- Cursor AI
- Any LLM-based coding assistant

---

## Troubleshooting

### Script won't run

**Error**: `node: command not found`

- **Solution**: Install Node.js (required version in package.json)

**Error**: `Cannot find module`

- **Solution**: Run `npm install` first

### Git branch creation fails

**Error**: `fatal: A branch named 'epic/...' already exists`

- **Solution**: Choose different epic number or delete existing branch

**Error**: `You have uncommitted changes`

- **Solution**: Commit or stash changes before creating branch

### Template files not found

**Error**: `Template not found`

- **Solution**: Ensure you're in project root directory
- **Solution**: Check `backlog/templates/` folder exists

### Can't find epic/story

**Error**: `Epic not found: EPIC-XXX`

- **Solution**: Check epic folder name exactly matches
- **Solution**: Run without arguments to see list

---

## Additional Resources

- [Quick Start Guide](./QUICK-START.md) - Fast reference
- [Template README](./README.md) - Overview
- [Main Backlog README](../README.md) - Project backlog structure
- [Example Epic](../epics/EPIC-009-interactive-map-leaflet/epic.md) - See complete example

---

## Support

For questions or issues:

1. Check this guide
2. Review existing epics for examples
3. Consult team lead
4. Update this guide with learnings!

---

**Last Updated**: 2025-10-20  
**Version**: 1.0.0
