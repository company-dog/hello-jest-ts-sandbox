### Installation

```
yarn init --yes
tsc --init 

yarn add -D jest ts-jest @types/jest typescript
```

## Setup 

### tsconfig.json

```json
"outDir": "./dist",
"rootDir": "./src",
```

### jest init

```
yarn jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … yes
```

### `jest.config.js`

```js
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
```

## Test

```
yarn test --watchAll
```

