This repo aims to demo [this issue](https://github.com/tajo/ladle/issues/417).

This repo is a nx project, with 3 lib projects: `ladle`, `app-shared` and `utils`. The dependency relations is:

1. `ladle` depends on `app-shared`. (`ladle/src/add.stories.tsx` imports `app-shared/add3`)
2. `app-shared` depends on `utils`. (`app-shared/add3` imports `utils/src/add`)

To execute ladle, run `npx nx run ladle:ladle`

The issue is: with `@ladle/react@2.4.5`, it works. However, with `@ladle/react@2.11.1`, `utils/src/add` cannot be found.

To install different versions of `@ladle/react`, run `pnpm add -w @ladle/react@version` in the project root.
