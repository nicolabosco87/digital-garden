
# More Types than Interfaces

Types and interfaces are almost similar but types are more modular (componibile) in making complex things

## use case

```typescript
// Works
type StringFilter<T extends string | number> = { [K in "equals" | "notEquals" & string as `${T}.${K}`]?: string };

const language: StringFilter<"language"> = {
  "language.equals": "1",
  "language.notEquals": "1"
}

// Can't do with interfaces
interface IStringFilter<T extends string | number> {
    [K in "equals" | "notEquals" & string as `${T}.${K}`]?: string;
}