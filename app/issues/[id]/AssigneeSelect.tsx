"use client";
import { Skeleton } from '@/app/components';
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Component to select an assignee for an issue
const AssigneeSelect = ({ issue }: { issue: Issue }) => {
    // Custom hook to fetch users
    const {
      data: users,
      error,
      isLoading,
    } = useUsers();

    // Show skeleton while loading
    if (isLoading) {
        return <Skeleton />;
    }

    // Handle error state
    if (error) {
        console.error("Error fetching users:", error); // Log error to console
        return null;
    }

    // Function to assign issue to a user
    const assignIssue = (userId: string) => {
        axios.patch("/api/issues/" + issue.id, {
            assignedToUserId: userId === "unassigned" ? null : userId,
        }).catch(() => {
            toast.error("Change could not be saved"); // Show error toast
        });
    }

    // Log users to inspect the data
    console.log("Users fetched from API:", users);

    // Render the select component
    return (
        <>
            <Select.Root
                defaultValue={issue.assignedToUserId || ""}
                onValueChange={assignIssue}
            >
                <Select.Trigger placeholder="Assign..." />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Suggestions</Select.Label>
                        <Select.Item value="unassigned">Unassigned</Select.Item>
                        {users?.map((user) => (
                            <Select.Item key={user.id} value={user.id}>
                                {user.name}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Toaster />
        </>
    );
};

// Custom hook to fetch users
const useUsers = () => useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
        axios.get("/api/users").then((res) => {
            console.log("Response from /api/users:", res.data); // Log the response data
            return res.data;
        }),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3
});

export default AssigneeSelect;
