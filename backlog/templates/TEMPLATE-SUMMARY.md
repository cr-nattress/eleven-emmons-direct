# Backlog Template System - Summary

## What This System Provides

A complete template and automation system for managing project backlog with:

### 📁 Templates
- **Epic Template** - Complete epic structure with all sections
- **User Story Template** - User story format with acceptance criteria
- **Task Template** - Task structure with agent prompt section

### 🤖 Automation Scripts
- **create-epic.js** - Creates epic folder + git branch
- **create-user-story.js** - Creates user story folder
- **create-task.js** - Creates task file with template

### 📚 Documentation
- **README.md** - System overview
- **QUICK-START.md** - Fast reference guide
- **USAGE-GUIDE.md** - Complete usage documentation
- **Script README** - Script-specific docs

### ⚡ NPM Commands
```bash
npm run epic:create    # Create new epic
npm run story:create   # Create new user story
npm run task:create    # Create new task
```

---

## File Structure

```
backlog/
├── templates/                          # This directory
│   ├── README.md                       # System overview
│   ├── QUICK-START.md                  # Quick reference
│   ├── USAGE-GUIDE.md                  # Complete guide
│   ├── TEMPLATE-SUMMARY.md             # This file
│   ├── epic-template/
│   │   ├── epic.md                     # Epic template
│   │   └── user-stories/
│   │       └── .gitkeep
│   ├── user-story-template/
│   │   ├── story.md                    # User story template
│   │   └── tasks/
│   │       └── .gitkeep
│   └── task-template.md                # Task template
│
├── scripts/                            # Automation scripts
│   ├── README.md                       # Scripts documentation
│   ├── create-epic.js                  # Epic creation
│   ├── create-user-story.js            # Story creation
│   └── create-task.js                  # Task creation
│
└── epics/                              # Your actual epics
    └── EPIC-XXX-name/
        ├── epic.md
        └── user-stories/
            └── US-XXX-name/
                ├── story.md
                └── tasks/
                    └── TASK-XXX-name.md
```

---

## Quick Workflow

### 1. Create Epic
```bash
npm run epic:create
# Answer prompts, git branch created automatically
```

### 2. Create User Stories
```bash
npm run story:create
# Select epic, answer prompts
```

### 3. Create Tasks
```bash
npm run task:create
# Select epic and story, answer prompts
```

### 4. Execute Tasks
- Open task file
- Copy "Agent Prompt" section
- Paste to AI assistant
- Execute and verify
- Mark complete

---

## Key Features

### 🎯 Follows Project Conventions
- Matches existing epic structure (EPIC-009)
- Uses project naming conventions
- Includes all standard sections

### 🌿 Git Branch Management
- Auto-creates epic branches from master
- Follows naming convention: `epic/XXX-name`
- Optional - can skip if not needed

### 🤖 AI-Ready Agent Prompts
- Every task includes detailed agent prompt
- Copy-paste ready for Claude, ChatGPT, Cursor, etc.
- Includes context, requirements, and verification

### 📊 Progressive Disclosure
- Epic → User Story → Task hierarchy
- Each level adds more detail
- Clear separation of concerns

### ✅ Complete Templates
All important sections included:
- Business value and metrics
- Acceptance criteria
- Technical notes
- Risks and dependencies
- Verification steps
- Troubleshooting

---

## Template Contents

### Epic Template Sections
- Epic Overview
- Business Value
- Current State / Target State
- User Stories list
- Acceptance Criteria
- Success Metrics
- Dependencies
- Risks & Mitigation
- Technical Notes
- Related Epics

### User Story Template Sections
- User Story (As a... I want... So that...)
- Acceptance Criteria
- Technical Notes
- Definition of Done
- Tasks list
- Related Stories

### Task Template Sections
- Task Description
- **Agent Prompt** (copy-paste ready)
- Implementation Steps (with commands)
- Verification Steps
- Expected Output
- Troubleshooting
- Rollback Plan
- Notes & Resources

---

## Agent Prompt Format

Every task includes this structure:

```
## Agent Prompt

[Task objective]

Context:
- Project context
- Tech stack
- Current state

Task:
1. Specific step 1
2. Specific step 2
3. Verification

Requirements:
- Requirement 1
- Requirement 2

Verification:
- How to verify
- Expected outcome
```

This makes tasks immediately executable by AI coding assistants.

---

## Customization

### Modify Templates
Edit files in `templates/` directory:
- `epic-template/epic.md`
- `user-story-template/story.md`
- `task-template.md`

### Modify Scripts
Edit files in `scripts/` directory:
- Add new prompts
- Change naming conventions
- Add validation rules
- Customize git behavior

### Add Custom Scripts
Create new scripts for:
- Bulk creation
- Status updates
- Reporting
- Integration with tools

---

## Best Practices

### Epic Creation
✅ Create from master branch
✅ Define clear business value
✅ List all planned user stories
✅ Estimate total story points
✅ Identify dependencies early

### User Story Creation
✅ Follow "As a... I want... So that..." format
✅ Make acceptance criteria testable
✅ Keep stories small (1-5 points)
✅ Include technical notes
✅ Break into 3-5 tasks

### Task Creation
✅ Write detailed agent prompts
✅ Include exact commands
✅ Add verification steps
✅ Document troubleshooting
✅ Keep tasks focused (15min-2hrs)

### Agent Prompts
✅ Be extremely specific
✅ Include all context
✅ List exact requirements
✅ Add verification steps
✅ Provide expected output

---

## Integration with Workflow

### With AI Assistants
1. Create task from template
2. Fill in agent prompt section
3. Copy prompt to Claude/ChatGPT/Cursor
4. Let AI execute the task
5. Verify using verification steps

### With Git
1. Epic branch created automatically
2. Work in epic branch
3. Commit as you complete tasks
4. Merge epic to master when done

### With Project Management
- Epics = Epics/Initiatives
- User Stories = Stories
- Tasks = Subtasks
- Can export to Jira/Linear/GitHub Issues

---

## Examples in Project

See real examples in:
- `backlog/epics/EPIC-009-interactive-map-leaflet/`
  - See complete epic structure
  - See user stories with tasks
  - See detailed agent prompts

This epic was built with similar structure that these templates codify.

---

## Getting Help

1. **Quick Reference**: Read `QUICK-START.md`
2. **Complete Guide**: Read `USAGE-GUIDE.md`
3. **Examples**: Look at EPIC-009 in project
4. **Scripts Help**: Check `scripts/README.md`

---

## Version History

**v1.0.0** (2025-10-20)
- Initial template system
- Epic, user story, and task templates
- Automation scripts with git integration
- Complete documentation
- NPM scripts for easy access

---

## Future Enhancements

Potential additions:
- Status update scripts
- Bulk epic creation from CSV
- Reporting/dashboard scripts
- Integration with GitHub Issues
- Estimation helper tools
- Template variations for different work types

---

**Created**: 2025-10-20  
**Last Updated**: 2025-10-20  
**Version**: 1.0.0  
**Status**: Ready for Use ✅
