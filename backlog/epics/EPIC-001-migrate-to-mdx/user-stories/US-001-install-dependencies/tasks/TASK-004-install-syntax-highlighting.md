# TASK-004: Install Syntax Highlighting (Optional)

**Task ID:** TASK-004
**User Story:** US-001 - Install Dependencies
**Status:** To Do
**Estimated Time:** 5 minutes
**Priority:** Optional

## Task Description

Install rehype-pretty-code and shiki for beautiful code syntax highlighting. This is optional but recommended if content includes code blocks.

## Agent Prompt

```
Install syntax highlighting packages for enhanced code block rendering.

Run the following commands:
npm install rehype-pretty-code shiki

These packages provide:
- rehype-pretty-code: Rehype plugin for beautiful code highlighting
- shiki: VS Code's syntax highlighter (used by rehype-pretty-code)

Benefits:
- Beautiful, accurate syntax highlighting
- Supports 100+ languages
- Multiple themes available
- Zero client-side JavaScript (done at build time)

After installation:
1. Verify both packages in package.json
2. Check for any warnings
3. Note: Configuration will be added later in the markdown library update

This is optional - skip if content doesn't include code blocks.
```

## Commands to Execute

```bash
npm install rehype-pretty-code shiki
```

## Verification Steps

1. Check package.json for `rehype-pretty-code` and `shiki`
2. Verify no installation errors

## Expected Output

- Both packages added to package.json
- No errors during installation

## Notes

- OPTIONAL: Skip if content doesn't have code blocks
- Adds ~300KB to bundle (tree-shakeable)
- Highlighting happens at build time (no runtime cost)
- Can always add later if needed
