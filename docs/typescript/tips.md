# Typescript Tips

## Infer Type from a Zod schema

```ts
const taskSchema = z.object({
  title: z.string(),
  points: z.number(),
  completed: z.boolean(),
  comment: z.string().optional()
})

-type Task = {
-  title: string;
-  points: number;
-  completed: boolean;
-  comment?: string | undefined;
-}

+type Task = z.infer<typeof taskSchema>
```
