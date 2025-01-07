import { nanoid } from "nanoid";
import { Task } from "./types.ts";

export let tasks: Task[] = [];

tasks.push(
  {
    id: nanoid(),
    title: "Pass the recruiter",
    description: "Smile and don’t forget about your projects",
    completed: true,
    dueDate: "2025-01-10T10:00:00Z",
  },
  {
    id: nanoid(),
    title: "Complete the test assignment",
    description: "Write code that works",
    completed: true,
    dueDate: "2025-01-15T15:00:00Z",
  },
  {
    id: nanoid(),
    title: "Have a meal",
    description: "Coding on an empty stomach is illegal",
    completed: false,
    dueDate: "2025-01-12T12:30:00Z",
  },
  {
    id: nanoid(),
    title: "Get hired",
    description: "Sign the offer",
    completed: false,
    dueDate: "2025-01-20T09:00:00Z",
  }
);
