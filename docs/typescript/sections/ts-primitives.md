
## Enhance Number with properties

```typescript
// Enhance Number
type EnhancedNumber = number & {
  other?: string;
}

const test: EnhancedNumber = 3;
test.other = "other";

// Enhance number via Interface
declare interface Number {
  toPowerOf10: () => string;
}

Number.prototype.toPowerOf10 = function() : string {
  return this.toExponential();
}

var n: Number = 10000;
console.log(n.toPowerOf10());
```