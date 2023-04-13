# Discriminated Union Types

Optional properties/params could generate wrong logic states:

```typescript
type ShippingAddress = {
  address: string;
  isPickup: boolean;
  pickupCompany?: string;
}

const s1: ShippingAddress = {
  address: "via roma 1",
  isPickup: false,
  pickupCompany: "pickupCompany" // Invalid State! should be undefined
}

const s2: ShippingAddress = {
  address: "via roma 1",
  isPickup: true,
  pickupCompany: undefined // Invalid State! should be string
}
```

Using discriminated union types a strict logic can be added to types.

The `kind` property tells TS which schema should consider valid.

```typescript
enum ShippingKindEnum {
  basic = "basic",
  withPickup = "withPickup"
}

interface ShippingAddressBasic {
  kind: ShippingKindEnum
}

interface ShippingAddressNoPickup extends ShippingAddressBasic {
  kind: ShippingKindEnum.basic;
  address: string;
}


interface ShippingAddressWithPickup extends ShippingAddressBasic  {
  kind: ShippingKindEnum.withPickup,
  address: string;
  pickupCompany: string;
}

type ShippingAddress = ShippingAddressNoPickup | ShippingAddressWithPickup;


const s1: ShippingAddress = {
  kind: ShippingKindEnum.basic,
  address: "via roma 1",
  // pickupCompany: "pickupCompany", // this will generate an error
}

const s2: ShippingAddress = {
  kind: ShippingKindEnum.withPickup,
  address: "via roma 1",
  pickupCompany: "pickupCompany" // this field become mandatory
}
```

Also in this way autocompletion comes available.


## Type narrowing

Use type narrowing while using discriminated union types to get only valid properties by `kind`

```typescript
function showInfo(s: ShippingAddress) {
  // Type narrowing
  if (s.kind === ShippingKindEnum.basic) {
    return s.address;
  }

  // No checks required, TS already filtered kinds
  return `${s.address} (${s.pickupCompany})`; // no checks/errors because the only remaining kind is "withPickup"
}
```
