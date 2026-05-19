/**
 * Example: Using React Query with API hooks
 * This file demonstrates how to use the API hooks in your components
 */

import { useApiQuery, useApiMutation } from "@/hooks/use-api-query";
import { User } from "@/lib/api-types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

/**
 * Example 1: Fetching data
 */
export function UserListExample() {
  const { data: users, isLoading, error } = useApiQuery<User[]>("/users");

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
}

/**
 * Example 2: Creating data with mutation
 */
export function CreateUserExample() {
  const { toast } = useToast();
  const { mutate, isPending } = useApiMutation<User, { email: string; password: string }>(
    "/users",
    {
      onSuccess: (data) => {
        toast({
          title: "Success",
          description: `User ${data.email} created!`,
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  const handleCreate = () => {
    mutate({
      email: "user@example.com",
      password: "password123",
    });
  };

  return <Button onClick={handleCreate} disabled={isPending}>
    {isPending ? "Creating..." : "Create User"}
  </Button>;
}

/**
 * Example 3: Combining query and mutation
 */
export function UserManagerExample() {
  const { toast } = useToast();
  const { data: users, refetch } = useApiQuery<User[]>("/users");
  
  const deleteMutation = useApiMutation<void, void>("/users/1", {
    onSuccess: () => {
      toast({ title: "User deleted" });
      refetch(); // Refetch the list after deletion
    },
  });

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.email}
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteMutation.mutate()}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
