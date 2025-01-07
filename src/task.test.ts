import { resolvers } from "../src/resolvers.ts";
import { tasks } from "../src/db.ts";

describe("Task Resolvers", () => {
  it("should create a new task", () => {
    const task = resolvers.Mutation.createTask(null, {
      input: {
        title: "Test Task",
        description: "Test Description",
        dueDate: "2025-02-01T00:00:00Z",
      },
    });

    expect(task.title).toBe("Test Task");
    expect(tasks.length).toBe(2);
  });

  it("should fetch all tasks", () => {
    const result = resolvers.Query.tasks({}, {});
    expect(result.length).toBe(2);
  });
});
