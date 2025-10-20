# Backlog Templates - Quick Start Guide

## 🚀 Quick Commands

### Create an Epic (with git branch)
```bash
node backlog/scripts/create-epic.js
```

**Prompts you for:**
- Epic number (auto-suggests next available)
- Epic name (kebab-case, e.g., "interactive-map-leaflet")
- Epic title (human-readable, e.g., "Interactive Map Implementation")
- Priority (High/Medium/Low)
- Story points estimate
- Target completion week
- Create git branch? (yes/no)

**Creates:**
- `backlog/epics/EPIC-XXX-name/` folder
- `epic.md` file with template
- `user-stories/` subfolder
- Git branch: `epic/XXX-name` (from master)

---

### Create a User Story
```bash
node backlog/scripts/create-user-story.js
# Or specify epic: node backlog/scripts/create-user-story.js EPIC-009
```

**Prompts you for:**
- Epic selection (shows list if not specified)
- Story number (auto-suggests next available)
- Story name (kebab-case, e.g., "setup-basic-map")
- Story title (human-readable, e.g., "Setup Leaflet and Create Basic Map")
- Priority (High/Medium/Low)
- Story points (1/2/3/5/8)
- Sprint/week

**Creates:**
- `backlog/epics/EPIC-XXX/user-stories/US-XXX-name/` folder
- `story.md` file with template
- `tasks/` subfolder

---

### Create a Task
```bash
node backlog/scripts/create-task.js
# Or specify: node backlog/scripts/create-task.js EPIC-009 US-001
```

**Prompts you for:**
- Epic selection (shows list if not specified)
- User story selection (shows list if not specified)
- Task number (auto-suggests next available)
- Task name (kebab-case, e.g., "install-dependencies")
- Task title (human-readable, e.g., "Install Dependencies")
- Priority (High/Medium/Low)
- Estimated time (e.g., "30 minutes", "2 hours")

**Creates:**
- `TASK-XXX-name.md` file with agent prompt template

---

## 📋 Example Workflow

### Scenario: Building a New Feature

**Step 1: Create the Epic**
```bash
$ node backlog/scripts/create-epic.js

Epic number: 10
Epic name: photo-gallery
Epic title: Photo Gallery Component
Priority: High
Story points: 8
Target: Week 3
Create git branch? y

✅ Epic created!
🌿 Git branch: epic/010-photo-gallery
```

**Step 2: Create User Stories**
```bash
$ node backlog/scripts/create-user-story.js EPIC-010

Story number: 1
Story name: design-gallery-layout
Story title: Design Gallery Layout and Components
Priority: High
Story points: 3
Sprint: Week 3

✅ User story created!
```

```bash
$ node backlog/scripts/create-user-story.js EPIC-010

Story number: 2
Story name: implement-lightbox
Story title: Implement Lightbox Functionality
Priority: High
Story points: 3
Sprint: Week 3

✅ User story created!
```

**Step 3: Create Tasks for First Story**
```bash
$ node backlog/scripts/create-task.js EPIC-010 US-001

Task number: 1
Task name: create-gallery-component
Task title: Create Gallery Component File
Priority: High
Estimated time: 1 hour

✅ Task created!
```

```bash
$ node backlog/scripts/create-task.js EPIC-010 US-001

Task number: 2
Task name: style-gallery-grid
Task title: Style Gallery Grid Layout
Priority: High
Estimated time: 2 hours

✅ Task created!
```

**Step 4: Execute Tasks**
1. Open task file: `EPIC-010/.../tasks/TASK-001-create-gallery-component.md`
2. Fill in the "Agent Prompt" section
3. Copy the agent prompt to your AI coding assistant
4. Execute the task
5. Verify using "Verification Steps" section
6. Mark task as complete
7. Move to next task

**Step 5: Complete Epic**
1. All user stories done ✅
2. All acceptance criteria met ✅
3. Merge `epic/010-photo-gallery` to `master`
4. Deploy to production 🚀

---

## 🎯 Tips & Best Practices

### Epic Creation
- **Naming**: Use clear, descriptive names (2-4 words)
- **Scope**: Keep epics focused on one major feature
- **Story Points**: Start with rough estimate, refine as you learn
- **Branch**: Always create from clean `master` branch

### User Story Creation
- **As a... I want... So that**: Follow this format strictly
- **Testable**: Write acceptance criteria that can be verified
- **Independent**: Each story should be potentially shippable
- **Small**: 1-5 story points ideal, break down larger work

### Task Creation
- **Agent Prompts**: Be VERY specific and detailed
- **Commands**: Include exact commands to run
- **Verification**: Add clear steps to verify completion
- **Troubleshooting**: Document common issues you encounter

### Agent Prompts
Good agent prompt:
```
Install React-Leaflet and Leaflet packages.

Context:
- Project uses Next.js 14 with App Router
- Project uses TypeScript
- Need both react-leaflet and leaflet packages

Task:
1. Navigate to project root
2. Run: npm install react-leaflet leaflet
3. Run: npm install --save-dev @types/leaflet
4. Verify packages in package.json

Verification:
- react-leaflet appears in dependencies
- leaflet appears in dependencies
- @types/leaflet appears in devDependencies
- No error messages during install
```

Bad agent prompt:
```
Install the map stuff.
```

---

## 📁 Folder Structure Result

After running all scripts, you'll have:

```
backlog/
└── epics/
    └── EPIC-010-photo-gallery/
        ├── epic.md
        └── user-stories/
            ├── US-001-design-gallery-layout/
            │   ├── story.md
            │   └── tasks/
            │       ├── TASK-001-create-gallery-component.md
            │       ├── TASK-002-style-gallery-grid.md
            │       └── TASK-003-add-responsive-breakpoints.md
            └── US-002-implement-lightbox/
                ├── story.md
                └── tasks/
                    ├── TASK-001-install-lightbox-library.md
                    └── TASK-002-create-lightbox-component.md
```

---

## 🔧 Troubleshooting

**Q: Script says "Epic not found"**
- Check you're in the project root directory
- Verify epic folder name matches exactly
- Epic must start with "EPIC-"

**Q: Git branch creation failed**
- Ensure you're on master/main branch
- Check for uncommitted changes
- Verify git is initialized

**Q: Task numbers not sequential**
- This is OK! Numbers are for organization, not strict sequence
- You can manually adjust if needed

**Q: Can I rename folders after creation?**
- Yes, but update all internal references
- Update links in parent epic/story files
- Easier to delete and recreate if just made

**Q: How do I delete/archive an epic?**
- Move folder to `backlog/archive/` directory
- Or delete if no longer needed
- Update main `backlog/README.md`

---

## 📚 Next Steps

After creating your backlog structure:

1. **Fill in epic.md**
   - Write clear business value
   - Define success metrics
   - List dependencies and risks

2. **Fill in story.md files**
   - Write acceptance criteria
   - Add technical notes
   - List all tasks

3. **Fill in task files**
   - Write detailed agent prompts
   - Add verification steps
   - Include troubleshooting notes

4. **Start executing**
   - Work through tasks in order
   - Use agent prompts with AI assistants
   - Update status as you go
   - Commit and push regularly

---

## 🎓 Resources

- [Full Template Documentation](./README.md)
- [Epic Template](./epic-template/epic.md)
- [User Story Template](./user-story-template/story.md)
- [Task Template](./task-template.md)
- [Project Backlog README](../README.md)

---

**Happy Epic Building! 🚀**
