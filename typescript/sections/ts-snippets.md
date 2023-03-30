# TS Snippets

## Show result in Playground //   ^?

`//   ^?` this shows the result of the upper line inside TS Playground

## Loop a Union Type
```typescript
type ConvertPropertiesToString<T extends string> = {
  [K in T]: string;
};

type NS = ConvertPropertiesToString<"a" | "b"> // ("a" | "b") is a subset (sottotipo) of string
```

## Get keys of a Type

```typescript
// K in keyof T
type ConvertPropertiesToString<T> = {
  [K in keyof T]: string;
};

type MyOmit<T, U> = {
  [K in keyof T as K extends U ? never : K]: T[K]; // For every key in T do a conditional (in this case if K === U)
};
```


## Set type's properties as readonly quickly

```typescript
const readOnlyTest = {
    a: "valueA",
    b: "valueB",
} as const;
//   ^?
// type const = { readonly a: "valueA", readonly b: "valueB" }

readOnlyTest.a = "newValueA"; // Error: a property is readonly

```


## Remove a property
Using `-` a property can be removed:

```typescript
type CustomRequired<T> = {
  [K in keyof T]-?: T[K]; // by using - the optional property will be removed
};
```

```typescript
interface Props {
  readonly a: string;
  readonly b: string;
}

type CustomEditable<T> = {
  -readonly [K in keyof T]: T[K]; // by using - the readonly property will be removed
};

type EditableProps = CustomEditable<Props>;

const c:EditableProps = {
    a: "a",
    b: "b"
}

c.a = "aa";
c.b = "bb";
```

## Conditionals

A conditional can be made though `extends ? [RESULT-IF-TRUE] : [RESULT-IF-FALSE]` 

```typescript
// Simple checking if T is a string
export type IsAString<T> = T extends string ? "string" : "not-a-string";

type S = string;
type N = number;
type SN = string | number | "other";

type ResultString = IsAString<S>; // type ResultString = "string"
type ResultNumber = IsAString<N>; // type ResultNumber = "not-a-string" 

// This will be both, condition is applied for all elements in union type and then merged
type ResultStringNumber = IsAString<SN>; // type ResultStringNumber = "string" | "not-a-string" 
```


## Generate dynamic keys

```typescript
type TStringFilter<T extends string | number> = { [K in "equals" | "notEquals" & string as `${T}.${K}`]?: string };

const language: TStringFilter<"language"> = {
  "language.equals": "1",
  "language.notEquals": "3"
}

```

## A way to access not exported properties

This is also useful while debugging

```typescript
type SelectItem = {id: string, label: string}

type SingleSelectProps = {
  options: SelectItem[];
  onChange: (item: SelectItem) => void;
}

type MultipleSelectProps = {
  options: SelectItem[];
  multiple: boolean;
  onChange: (items: SelectItem[]) => void;
}

type SelectProps = SingleSelectProps | MultipleSelectProps;

// Useful way to debug union types
// this results => type onChange = ((item: SelectItem) => void) | ((items: SelectItem[]) => void)
type onChange = SelectProps["onChange"]; 
```


## infer

Used for caching a type from another type.

It must be used inside a conditional, before the tyoe you want to catch.

```typescript
// Here infer is used for catching the function returned value. 
export type CustomReturnType<T> = T extends () => infer P ? P : void;

// Testing
// type T0 = string
type T0 = CustomReturnType<() => string>;

// type T1 = void
type T1 = CustomReturnType<(s: string) => void>;

// type T2 = unknown
type T2 = CustomReturnType<<T>() => T>;
```

## Optionally call a function if exists
```typescript
open?.({
    message: t("error"),
    type: "error",
});
```