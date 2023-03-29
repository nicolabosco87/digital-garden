# Mantine

## Useful tips

### Use multiple rules on a field (without Zod,Yup)

```typescript
function multiValidation(rules: unknown[]) {
  const allNull = rules.reduce((acc, rule) => acc ?? rule, null)

  return allNull ? null : rules
}

// Usage example
validate: (values) => ({
    username: multiValidation([
        values.username.length < 3 ? 'Username is too short' : null,
        usernames.includes(values.username) ? "Username already exists" : null,
    ]),
})
```