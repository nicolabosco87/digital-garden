# ES6


## Async/Await

### Clean way for errors handling

```typescript
async function func1() {
    throw Error();
}

async function func2() {
    return Promise.Reject();
}
    
async function myFunc() {
    try {
        // async flow
        await func1();
        await func2();
    } catch (e) {
        console.log("Catched error", e); 
    }
}
```