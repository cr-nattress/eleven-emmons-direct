# Backlog Templates

This directory contains templates and scripts for creating epics, user stories, and tasks following the project's conventions.

## Quick Start

### Creating a New Epic

```bash
# Run the epic creation script
node scripts/create-epic.js

# Or manually:
# 1. Copy templates/epic-template
# 2. Rename to EPIC-XXX-name
# 3. Fill in epic.md
# 4. Create git branch: epic/XXX-name
```

### Creating a New User Story

```bash
# Run the user story creation script
node scripts/create-user-story.js EPIC-XXX

# Or manually:
# 1. Copy templates/user-story-template
# 2. Rename to US-XXX-name
# 3. Fill in story.md
```

### Creating a New Task

```bash
# Run the task creation script
node scripts/create-task.js EPIC-XXX US-XXX

# Or manually:
# 1. Copy templates/task-template.md
# 2. Rename to TASK-XXX-name.md
# 3. Fill in agent prompt and details
```

## Template Files

- **`epic-template/`** - Epic folder structure with epic.md
- **`user-story-template/`** - User story folder structure with story.md
- **`task-template.md`** - Task markdown file with agent prompt section

## Scripts

- **`scripts/create-epic.js`** - Interactive epic creation with git branch
- **`scripts/create-user-story.js`** - Interactive user story creation
- **`scripts/create-task.js`** - Interactive task creation

## Conventions

### Numbering

- **Epic**: EPIC-001, EPIC-002, etc. (sequential)
- **User Story**: US-001, US-002, etc. (per epic)
- **Task**: TASK-001, TASK-002, etc. (per user story)

### Naming

- Use kebab-case for folders: `EPIC-001-feature-name`
- Use descriptive names: `US-001-install-dependencies`
- Keep names short but clear: `TASK-001-run-npm-install`

### Git Branches

- **Epic branch**: `epic/001-feature-name` (branched from `master`)
- **Feature branch**: `feature/US-001-install-dependencies` (branched from epic branch)

## Workflow

1. **Create Epic**
   - Run script to generate epic folder and branch
   - Fill in epic.md with overview and business value
   - List planned user stories

2. **Create User Stories**
   - Run script for each user story in the epic
   - Write user story in proper format
   - Break down into tasks

3. **Create Tasks**
   - Run script for each task
   - Write detailed agent prompts
   - Include verification steps

4. **Execute Work**
   - Check out epic branch
   - Work through tasks in order
   - Use agent prompts with AI coding assistants
   - Commit and push as you go

5. **Complete Epic**
   - Merge epic branch to master
   - Archive completed epic (optional)
   - Update backlog README

---

**Last Updated**: 2025-10-20
**Version**: 1.0
