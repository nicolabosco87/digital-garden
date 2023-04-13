# Vite


## Use absolute Aliases

Method for adding aliases to 

```ts
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@ui' : path.resolve(__dirname, './src/shared/ui'),
      '@components' : path.resolve(__dirname, './src/shared/components'),
    },
  },
  plugins: [react()]
})
```

https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa