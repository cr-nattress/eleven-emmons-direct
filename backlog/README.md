# Project Backlog

This directory contains the project backlog organized into epics, user stories, and tasks.

## Structure

```
backlog/
├── README.md                    (this file)
├── epics/
│   └── EPIC-XXX-name/
│       ├── epic.md             (Epic overview and acceptance criteria)
│       └── user-stories/
│           └── US-XXX-name/
│               ├── story.md    (User story details)
│               └── tasks/
│                   └── TASK-XXX-name.md  (Detailed task prompts)
```

## Hierarchy

```
Epic (Large feature/initiative)
  └── User Story (User-facing value)
      └── Task (Technical implementation step)
```

## Naming Conventions

- **Epic**: `EPIC-###-short-description`
  - Example: `EPIC-001-migrate-to-mdx`

- **User Story**: `US-###-short-description`
  - Example: `US-001-install-dependencies`

- **Task**: `TASK-###-specific-action`
  - Example: `TASK-001-install-core-packages`

## File Structure

### Epic File (`epic.md`)

Contains:
- Epic overview and business value
- Current state and target state
- List of user stories
- Acceptance criteria
- Risks and dependencies
- Success metrics

### User Story File (`story.md`)

Contains:
- User story in "As a... I want... So that..." format
- Acceptance criteria
- Story points estimate
- Technical notes
- List of tasks
- Definition of Done

### Task File (`TASK-XXX.md`)

Contains:
- Detailed task description
- Agent prompt (copy-paste ready for AI coding assistants)
- Commands to execute
- Verification steps
- Expected output
- Notes and considerations

## How to Use This Backlog

### For Developers

1. Navigate to an epic folder
2. Read `epic.md` to understand the overall goal
3. Open a user story folder
4. Read `story.md` for context
5. Work through tasks in order
6. Use the "Agent Prompt" section to brief an AI coding assistant

### For AI Coding Assistants

When given a task file:
1. Read the entire task file
2. Execute the "Agent Prompt" section
3. Follow verification steps
4. Report results back to user

### For Project Managers

- Track epic progress by checking user story completion
- User stories represent shippable increments
- Tasks are technical breakdowns for implementation

## Status Values

### Epic Status
- **To Do**: Not started
- **In Progress**: At least one user story in progress
- **Done**: All user stories complete

### User Story Status
- **To Do**: Not started
- **In Progress**: At least one task started
- **Done**: All acceptance criteria met

### Task Status
- **To Do**: Not started
- **In Progress**: Currently being worked on
- **Done**: Verification steps passed

## Priority Levels

- **High**: Must be completed for epic success
- **Medium**: Important but not blocking
- **Low**: Nice to have, can be deferred
- **Optional**: Can be skipped without impacting core functionality

## Story Points

Rough effort estimates:
- **1 point**: 1-2 hours
- **2 points**: 2-4 hours
- **3 points**: 4-8 hours
- **5 points**: 1-2 days
- **8 points**: 2-4 days

## Current Epics

### Active Epics

- **[EPIC-001: Migrate to MDX](./epics/EPIC-001-migrate-to-mdx/epic.md)**
  - Status: To Do
  - Priority: Medium
  - Story Points: 14
  - User Stories: 9

## Adding New Items

### Creating a New Epic

1. Create folder: `backlog/epics/EPIC-XXX-name/`
2. Create `epic.md` with overview
3. Create `user-stories/` subfolder
4. List user stories in epic.md

### Creating a New User Story

1. Create folder: `backlog/epics/EPIC-XXX/user-stories/US-XXX-name/`
2. Create `story.md` with user story format
3. Create `tasks/` subfolder
4. List tasks in story.md

### Creating a New Task

1. Create file: `backlog/epics/EPIC-XXX/user-stories/US-XXX/tasks/TASK-XXX-name.md`
2. Include detailed agent prompt
3. Add verification steps
4. Document expected outcomes

## Best Practices

### For Task Prompts

- ✅ Be specific and detailed
- ✅ Include exact commands to run
- ✅ Provide verification steps
- ✅ Document expected output
- ✅ Include troubleshooting notes
- ❌ Don't assume knowledge
- ❌ Don't skip error handling
- ❌ Don't leave ambiguity

### For User Stories

- ✅ Focus on user value
- ✅ Include clear acceptance criteria
- ✅ Make them testable
- ✅ Keep them independent
- ❌ Don't make them too large
- ❌ Don't include technical implementation details
- ❌ Don't write from developer perspective

### For Epics

- ✅ Define clear business value
- ✅ Include success metrics
- ✅ List all dependencies
- ✅ Document risks
- ❌ Don't make them open-ended
- ❌ Don't mix unrelated features
- ❌ Don't skip the "why"

## Integration with Tools

### GitHub Issues

Tasks can be converted to GitHub issues:
```bash
gh issue create --title "TASK-001: Install Core Packages" \
  --body-file backlog/epics/EPIC-001-migrate-to-mdx/user-stories/US-001-install-dependencies/tasks/TASK-001-install-core-packages.md \
  --label "task" \
  --label "EPIC-001"
```

### Jira/Linear

- Epic = Epic/Initiative
- User Story = Story
- Task = Subtask

### Todo Lists

Use the TodoWrite tool to track active work:
```
1. [in_progress] TASK-001: Install Core Packages
2. [pending] TASK-002: Install Remark Plugins
```

## Maintenance

- Review backlog weekly
- Archive completed epics to `/backlog/archive/`
- Update status as work progresses
- Refine estimates based on actual effort
- Keep task prompts up to date with learnings

## Questions?

For questions about this backlog system, see:
- [Epic-001 Example](./epics/EPIC-001-migrate-to-mdx/epic.md)
- Project documentation
- Team lead

---

**Last Updated**: 2025-10-20
**Version**: 1.0
