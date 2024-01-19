# SOLID principles

## 1: Single-responsibility principle

> A class should only have a single responsibility, that is, only changes to one part of the software’s specification should be able to affect the specification of the class.

Mantain a low complexity through the application, a method is good architecture of how the components tree is formed.

## 2: Open-closed principle

> Software entities should be open for extension, but closed for modification.

### Application on React

- don't allow too much props on components
- try to divide logics/parts through composition

## 3: Liskov substitution principle

> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.

Through components we can create logics that shares the same inputs, so TypeScript could help on those validations.

## 4: Interface segregation principle

> Many client-specific interfaces are better than one general-purpose interface.

Split types/interfaces into smaller and significative pieces. The purpose is to not having unused properties.

## 5: Dependency inversion principle

> One should “depend upon abstractions, [not] concretions.

Use abstractions for accessing services/libs so it could be easier to refactoring/substitute.
