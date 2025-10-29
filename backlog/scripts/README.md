# Backlog Automation Scripts

This directory contains Node.js scripts for automating backlog creation.

## Scripts

### create-epic.js

Creates a new epic with folder structure and git branch.

**Usage:**

```bash
node backlog/scripts/create-epic.js
# or
npm run epic:create
```

**Creates:**

- Epic folder: `backlog/epics/EPIC-XXX-name/`
- Epic file: `epic.md` with template
- User stories folder: `user-stories/`
- Git branch: `epic/XXX-name` (from master)

---

### create-user-story.js

Creates a new user story within an epic.

**Usage:**

```bash
node backlog/scripts/create-user-story.js [EPIC-XXX]
# or
npm run story:create
```

**Creates:**

- User story folder: `US-XXX-name/`
- Story file: `story.md` with template
- Tasks folder: `tasks/`

---

### create-task.js

Creates a new task within a user story.

**Usage:**

```bash
node backlog/scripts/create-task.js [EPIC-XXX] [US-XXX]
# or
npm run task:create
```

**Creates:**

- Task file: `TASK-XXX-name.md` with agent prompt template

---

## Requirements

- Node.js 20+ (matches project requirement)
- Git (for branch creation)
- Run from project root directory

## Features

- **Auto-numbering**: Suggests next available number
- **Interactive prompts**: Guides you through creation
- **Template filling**: Replaces placeholders with your values
- **Git integration**: Creates branches automatically
- **Validation**: Checks for existing folders/files

## Error Handling

All scripts include:

- Input validation
- Existence checks (no overwriting)
- Clear error messages
- Graceful failure (can create manually if script fails)

## Extending

To add new features:

1. Modify the script file
2. Update templates if needed
3. Test thoroughly
4. Update documentation

---

**Last Updated**: 2025-10-20
