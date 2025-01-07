import { gql } from "apollo-server";

export const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    dueDate: String!
  }

  input TaskInput {
    title: String!
    description: String
    completed: Boolean
    dueDate: String!
  }

  type Query {
    tasks(completed: Boolean, dueDate: String, limit: Int, offset: Int): [Task]
    task(id: ID!): Task
  }

  type Mutation {
    createTask(input: TaskInput!): Task
    updateTask(id: ID!, input: TaskInput!): Task
    deleteTask(id: ID!): Boolean
  }
`;
