import { tasks } from "./db.ts";
import { TaskInput, Task } from "./types.ts";
import { nanoid } from "nanoid";

export const resolvers = {
  Query: {
    tasks: (
      _: any,
      {
        completed,
        dueDate,
        limit = 10,
        offset = 0,
      }: {
        completed?: boolean;
        dueDate?: string;
        limit?: number;
        offset?: number;
      }
    ) => {
      let filteredTasks = tasks;

      if (completed !== undefined) {
        filteredTasks = filteredTasks.filter(
          (task) => task.completed === completed
        );
      }
      if (dueDate) {
        filteredTasks = filteredTasks.filter(
          (task) => task.dueDate === dueDate
        );
      }

      return filteredTasks.slice(offset, offset + limit);
    },
  },
  Mutation: {
    createTask: (_: any, { input }: { input: TaskInput }) => {
      const newTask: Task = {
        ...input,
        id: nanoid(),
        completed: input.completed ?? false,
      };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (
      _: any,
      { id, input }: { id: string; input: Partial<TaskInput> }
    ) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) throw new Error("Task not found");

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...input,
      };
      return tasks[taskIndex];
    },
    markAllTasksCompleted: () => {
      tasks.forEach((task) => {
        task.completed = true;
      });

      return tasks;
    },
    deleteTask: (_: any, { id }: { id: string }) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) throw new Error("Task not found");

      const deletedTask = tasks.splice(taskIndex, 1)[0];
      return deletedTask;
    },
  },
};
