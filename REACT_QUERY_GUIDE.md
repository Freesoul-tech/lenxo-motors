# React Query API Integration Guide

This project uses **React Query (TanStack Query)** v5 for efficient data fetching and state management with the backend API.

## Setup

React Query is already configured in `src/App.tsx` with a `QueryClientProvider` wrapping the entire application.

## API Client

The API client is located in `src/lib/api-client.ts` and provides typed methods for making requests:

- `apiRequest()` - Generic fetch wrapper
- `apiGet()` - GET requests
- `apiPost()` - POST requests
- `apiPut()` - PUT requests
- `apiPatch()` - PATCH requests
- `apiDelete()` - DELETE requests

### Configuration

Set the backend API URL in your `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

## React Query Hooks

Available hooks in `src/hooks/use-api-query.ts`:

### useApiQuery<T>()

For fetching data with automatic caching and refetching.

```typescript
import { useApiQuery } from "@/hooks/use-api-query";
import { User } from "@/lib/api-types";

function MyComponent() {
  const { data, isLoading, error } = useApiQuery<User[]>("/users");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.length} users found</div>;
}
```

### useApiMutation<TData, TVariables>()

For POST requests (creating/updating data).

```typescript
import { useApiMutation } from "@/hooks/use-api-query";

function CreateUserForm() {
  const { mutate, isPending } = useApiMutation(
    "/users",
    {
      onSuccess: (data) => console.log("User created", data),
      onError: (error) => console.log("Error", error),
    }
  );

  return (
    <button onClick={() => mutate({ email: "test@example.com" })}>
      {isPending ? "Creating..." : "Create"}
    </button>
  );
}
```

### Other Mutation Hooks

- `useApiPutMutation()` - For PUT requests
- `useApiPatchMutation()` - For PATCH requests
- `useApiDeleteMutation()` - For DELETE requests

## Features

✅ **Type-safe** - Full TypeScript support for requests and responses
✅ **Automatic caching** - Data is cached by query key
✅ **Background refetching** - Stale data is automatically refreshed
✅ **Error handling** - Custom `ApiError` class with status and data
✅ **Optimistic updates** - Mutations update UI before server response
✅ **Devtools** - Use React Query DevTools for debugging

## Examples

See `src/lib/api-examples.tsx` for complete usage examples including:

- Fetching lists of data
- Creating new records
- Updating records
- Deleting records
- Combining queries and mutations

## Tips

1. **Define types** for your API responses in `src/lib/api-types.ts`
2. **Use query keys** effectively for cache management
3. **Handle loading and error states** in your components
4. **Invalidate queries** after mutations to refresh stale data
5. **Use stale-while-revalidate** for better UX with cached data
