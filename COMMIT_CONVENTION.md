## Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries
- **ci**: Changes to our CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies
- **revert**: Reverts a previous commit

## Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

Examples:

- `app` - Application-level changes
- `components` - React components
- `api` - API routes
- `utils` - Utility functions
- `types` - TypeScript types
- `config` - Configuration files
- `deps` - Dependencies

## Description

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end
- Keep it concise but descriptive

## Examples

### Good Examples

```
feat(app): add user authentication system
fix(components): resolve button click handler issue
docs(readme): update installation instructions
style(components): format code according to prettier rules
refactor(api): simplify user data fetching logic
perf(app): optimize image loading with next/image
test(utils): add unit tests for date formatting
chore(deps): update next.js to version 15.5.6
ci(github): add automated testing workflow
build(webpack): configure bundle optimization
```

### Bad Examples

```
❌ Fixed bug
❌ Updated code
❌ Added feature
❌ feat: add authentication (missing scope)
❌ feat(app): Add authentication system (capitalized, has period)
❌ feat(app): add authentication system. (has period)
```

## Body

The body should include the motivation for the change and contrast this with previous behavior.

```
feat(app): add user authentication system

Implement JWT-based authentication with login/logout functionality.
This replaces the previous session-based approach to improve security
and scalability.

Closes #123
```

## Footer

The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

```
feat(api)!: change user endpoint structure

BREAKING CHANGE: The user endpoint now returns user data in a nested
object structure instead of flat properties.

Closes #456
```

## Breaking Changes

Add `!` after the type/scope to indicate breaking changes:

```
feat(api)!: change user endpoint structure
```
