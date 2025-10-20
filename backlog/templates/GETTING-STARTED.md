# Getting Started with Backlog Templates

Welcome! This guide will get you creating epics, user stories, and tasks in under 5 minutes.

## 🚀 Your First Epic (5 Minute Tutorial)

Let's create a complete epic with one user story and one task.

### Step 1: Create an Epic (2 minutes)

```bash
npm run epic:create
```

**Answer the prompts:**
```
Epic number: 999
Epic name: test-feature
Epic title: Test Feature Implementation
Priority: Medium
Story points: 3
Target: This week
Create git branch? n
```

✅ **Result**: Epic folder created at `backlog/epics/EPIC-999-test-feature/`

### Step 2: Create a User Story (1 minute)

```bash
npm run story:create
```

**Answer the prompts:**
```
Select epic: 1 (EPIC-999-test-feature)
Story number: 1
Story name: setup-component
Story title: Setup Test Component
Priority: High
Story points: 2
Sprint: This week
```

✅ **Result**: User story folder created with `story.md`

### Step 3: Create a Task (1 minute)

```bash
npm run task:create
```

**Answer the prompts:**
```
Select epic: 1 (EPIC-999-test-feature)
Select story: 1 (US-001-setup-component)
Task number: 1
Task name: create-component-file
Task title: Create Component File
Priority: High
Estimated time: 30 minutes
```

✅ **Result**: Task file created with agent prompt template

### Step 4: Use the Task (1 minute)

1. Open: `backlog/epics/EPIC-999-test-feature/user-stories/US-001-setup-component/tasks/TASK-001-create-component-file.md`

2. Fill in the "Agent Prompt" section:
```
Create a new React component file called TestComponent.tsx

Context:
- Next.js 14 project with TypeScript
- Components located in /components directory
- Use TypeScript for type safety

Task:
1. Create file: components/TestComponent.tsx
2. Add basic functional component structure
3. Export the component

Requirements:
- Use TypeScript
- Use 'use client' directive if interactive
- Follow existing component patterns

Verification:
- File exists at components/TestComponent.tsx
- Component compiles without errors
- Component is properly exported
```

3. Copy the agent prompt and paste it to Claude/ChatGPT/Cursor

4. Let the AI execute the task

5. Verify the component was created

**Done! You've completed your first epic workflow! 🎉**

---

## 📚 What You Just Learned

You now know how to:
- ✅ Create epics with `npm run epic:create`
- ✅ Create user stories with `npm run story:create`
- ✅ Create tasks with `npm run task:create`
- ✅ Use agent prompts with AI assistants

---

## 🎯 Next Steps

### For Real Work

1. **Delete the test epic** (optional)
   ```bash
   rm -rf backlog/epics/EPIC-999-test-feature
   ```

2. **Create your real epic**
   ```bash
   npm run epic:create
   ```
   - Use meaningful name
   - Say "y" to create git branch
   - Fill in epic.md with real details

3. **Plan your user stories**
   - Break epic into 3-5 user stories
   - Each story = shippable increment
   - Each story = 1-5 story points

4. **Create your first user story**
   ```bash
   npm run story:create
   ```
   - Write good acceptance criteria
   - List all tasks needed

5. **Create tasks**
   ```bash
   npm run task:create
   ```
   - One task per significant action
   - Write detailed agent prompts
   - Include verification steps

6. **Execute tasks**
   - Open task file
   - Copy agent prompt
   - Use with AI assistant
   - Verify completion
   - Commit to git

---

## 📖 Learn More

### Quick References
- [QUICK-START.md](./QUICK-START.md) - Fast command reference
- [TEMPLATE-SUMMARY.md](./TEMPLATE-SUMMARY.md) - What's included

### Deep Dives
- [USAGE-GUIDE.md](./USAGE-GUIDE.md) - Complete documentation
- [README.md](./README.md) - System overview

### Examples
- [EPIC-009](../epics/EPIC-009-interactive-map-leaflet/) - Real epic in this project
- Look at the user stories and tasks to see complete examples

---

## 💡 Pro Tips

### Epic Creation
- Create git branch unless you have a reason not to
- Branch from clean `master` branch
- Fill in business value section - it's important!

### User Story Writing
- Always use "As a... I want... So that..." format
- Make acceptance criteria specific and testable
- Include technical notes for the developer

### Task Agent Prompts
- The more specific, the better
- Include exact commands to run
- Add file paths when relevant
- Describe expected output

### Git Workflow
```bash
# You'll be on epic branch after creation
git status                    # See what's changed
git add .                     # Stage changes
git commit -m "TASK-001: ..."  # Commit with task number
git push origin epic/XXX-name  # Push to remote

# When epic complete
git checkout master
git merge epic/XXX-name
git push origin master
```

---

## ❓ Common Questions

**Q: Can I edit templates?**
Yes! Edit files in `backlog/templates/` to customize.

**Q: Can I skip the git branch?**
Yes! Say "n" when prompted during epic creation.

**Q: What if script fails?**
You can always create folders/files manually using the templates.

**Q: Can I use custom numbers?**
Yes! Scripts suggest next number but you can use any number.

**Q: How do I delete an epic?**
Just delete the epic folder. Or move to `backlog/archive/`.

**Q: Do I need all three levels?**
- Epic: Required for organization
- User Story: Required for planning
- Task: Optional but highly recommended

**Q: Can I have tasks without user stories?**
Not recommended. Tasks should always be part of a user story.

---

## 🆘 Something Not Working?

### Scripts won't run
```bash
# Make sure you're in project root
cd /path/to/eleven-emmons

# Make sure Node.js is installed
node --version  # Should be 20+

# Try running directly
node backlog/scripts/create-epic.js
```

### Can't find created files
```bash
# Check you're in right place
pwd

# List epics
ls backlog/epics/

# Should see EPIC-XXX-name folders
```

### Git branch errors
- Make sure you're on master first: `git checkout master`
- Make sure you don't have uncommitted changes: `git status`
- Or skip branch creation and create manually later

---

## 🎓 Real Workflow Example

Here's how a typical feature gets built:

```bash
# Monday: Plan the work
npm run epic:create           # Create epic for new blog feature
# Fill in epic.md with goals and user stories

npm run story:create          # Create US-001: Blog post component
npm run story:create          # Create US-002: Blog listing page
npm run story:create          # Create US-003: Blog post MDX support

# Monday-Tuesday: Break down first story
npm run task:create           # TASK-001: Create blog post component
npm run task:create           # TASK-002: Add post metadata types
npm run task:create           # TASK-003: Style post layout
# Fill in agent prompts for each task

# Tuesday-Wednesday: Execute tasks
# Open TASK-001, copy agent prompt to Claude
# Claude creates the component
# Verify it works, commit
# Repeat for TASK-002, TASK-003

# Wednesday: First story complete!
# Update story.md status to Done
# Move to next story, repeat process

# Friday: Epic complete!
git checkout master
git merge epic/012-blog-feature
git push origin master
# Deploy to production 🚀
```

---

## ✅ You're Ready!

You now have everything you need to:
- Create structured, consistent backlogs
- Use AI assistants effectively
- Manage epics with git branches
- Execute work systematically

**Start creating your first real epic!**

```bash
npm run epic:create
```

---

**Need Help?** Read [USAGE-GUIDE.md](./USAGE-GUIDE.md) for complete documentation.

**Want Quick Reference?** Bookmark [QUICK-START.md](./QUICK-START.md).

**Ready to Go?** Start with `npm run epic:create` right now!

Good luck! 🚀
