# React

## Causes of complexity in code

### Obscurity

> Obscurity occours when important information is not obvious.

- Component has too many props
- Avoid optionals in favor of explicit Props by using [discriminated union types](./sections/discriminated-union-types.md)
    - make props/parameters more **discoverable**
    - more readibility, **less cognitive overload**
    - no wrong logic states
    - recuces ambiguity about domain definitions

### Lack of composition

- [handle props by hooks](./sections/props-by-hooks/props-by-hooks.md)
- Prefer [component composition](./sections/component-composition.md) than complex props (like modals)
- for API calls prefer [React Query](https://tanstack.com/query/v4/), let useEffect be used for other things
- for complex data effect handling could be used [Redux Saga](.sections/saga-example.md)


## Implicit Documentation

### Integrating Cypress as Docs 

Cypress tests can show what the application does by mocking the user actions.

### Usage of Discriminated union types 

[Discriminated union types](/sections/discriminated-union-types.md) types shows what kind of entities are used inside the app and logics of their composition

### Usage of Explicit State Machines
State machines can explain the app's data flows. 

Other than XState this can be done by using a property in the global state representing the app status.

## Libraries and Snippets

[Useful libraries](./sections/react-useful-libraries.md)
[Useful libraries](./sections/react-useful-libraries.md)