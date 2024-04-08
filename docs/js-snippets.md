# JS Snippets

### Open external link with error check

```js
const newWindow = window.open(url, "_blank");

// If the window could not be opened due to blocker or smth
if (!newWindow) {
  alert();
}
```
