# Vite


## Generate type on lib build

Can be done through `vite-plugin-dts`

```ts
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
      formats: ["es"],
    },
  },
  plugins: [dts()],
});
```

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