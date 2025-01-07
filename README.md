# 📝 To-Do Management Backend with GraphQL and TypeScript

## 📖 Project Overview

To-Do Management Backend is a simple server-side project for task management, built using GraphQL, TypeScript, and Apollo Server. The project allows you to create, update, delete, and fetch tasks.

It demonstrates how to build and interact with a GraphQL API, including:

- Paginated queries
- Filtering tasks by completion status
- Mutations to modify data

---

## 🎯 Project Goals

- Demonstrate the use of GraphQL API
- Apply TypeScript for data type safety and code reliability
- Utilize Apollo Server to create a scalable and flexible backend
- Practice working with GraphQL queries and mutations

## 🛠️ Key Features Implemented

Core Functionality:

1. Task Creation (Mutation createTask)

Allows the addition of new tasks with a title, description, and deadline.
Tasks default to completed: false if not specified.

2. Fetch Task List (Query tasks)

Retrieve all tasks or filter by status (completed) and paginate with limit and offset.

3. Task Update (Mutation updateTask)

Modify existing tasks by ID (e.g., mark as completed or update descriptions).

4. Task Deletion (Mutation deleteTask)

Delete tasks by ID and return true if the deletion is successful.

5. Mark All Tasks as Completed (Mutation markAllTasksCompleted)

Instantly mark all tasks as completed.

## 📝 Development Notes

- Tasks are stored locally in an array (tasks) in the db.ts file.
- If a real database is added (e.g., MongoDB or PostgreSQL), the server can easily be scaled.
- The project is structured to allow smooth integration of new features.

## 🚀 Queries and Mutations Available Right Now:

- Fetch all tasks with filtering and pagination (`tasks`)
- Fetch a single task by ID (`task`)
- Create a new task (`createTask`)
- Update an existing task (`updateTask`)
- Delete a task (`deleteTask`)
- Mark all tasks as completed (`markAllTasksCompleted`)
