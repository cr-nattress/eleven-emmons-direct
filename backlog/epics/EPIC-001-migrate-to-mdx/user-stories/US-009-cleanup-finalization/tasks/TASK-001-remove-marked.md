# TASK-001: Remove marked Package

**Task ID:** TASK-001
**User Story:** US-009 - Cleanup and Finalization
**Status:** To Do
**Estimated Time:** 5 minutes

## Task Description

Remove the old `marked` package from dependencies as it's no longer needed.

## Agent Prompt

```
Remove the marked package from the project:

Run the following command:
npm uninstall marked

This will:
- Remove marked from package.json dependencies
- Remove marked from package-lock.json
- Delete marked from node_modules

After uninstalling:
1. Verify marked is removed from package.json
2. Check that the dev server still runs: npm run dev
3. Verify the site works without marked
4. Confirm no import errors

Expected outcome:
- marked no longer in dependencies
- Site functions normally
- No errors related to missing marked package
```

## Commands to Execute

```bash
npm uninstall marked
```

## Verification Steps

1. Check package.json - marked should be gone
2. Run `npm run dev` - should start successfully
3. Visit http://localhost:3000 - site should load
4. Check browser console - no errors about marked

## Expected Output

```
removed 1 package, and audited X packages in Ys

found 0 vulnerabilities
```

## Notes

- Only remove after verifying MDX migration is complete
- Ensure all components are updated first
- Keep a backup or git commit before removing
- If errors occur, can reinstall with `npm install marked`
