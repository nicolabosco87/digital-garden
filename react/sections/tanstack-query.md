# Tanstack Query


[Tanstack query](https://tanstack.com/query/latest) is an utility capable to handle async data, can be used apart from *global states* for a complete data fetching, caching and updating.


## Init

For it's initialization a `<QueryClientProvider>` should wraps the application at top level.

```
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  )
}
```

## Queries

Data fetching will be done through `Queries` and .  

```
import {
  useQuery,
} from '@tanstack/react-query'

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
```


## React-Query Tips

### Trigger `useQuery` manually

#### Method 1: refetch() "Preferred one"

```typescript
export const useComments = () => {
const { data, refetch } = useQuery("comments", fetchComments, {
  enabled: false
});
<button onClick={() => refetch()}>Some Button</button>
```

#### Method 2: Enabled boolean

```typescript
const [enabled, setEnabled] = useState(false);
const { data } = useQuery("comments", fetchComments, {
  enabled: enabled
});
<button onClick={() => setEnabled(true)}>Some Button</button>
```