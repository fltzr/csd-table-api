import { z } from 'zod';

export const budgetItemSchema = z
  .object({
    name: z.string().min(3),
    amount: z.number().min(0),
  })
  .partial();

export const financeCategorySchema = z.object({
  name: z.string().min(3),
});

export const userDefinedLabelSchema = z.object({
  name: z.string().min(3),
  color: z.string(),
});

export type BudgetItemSummary = {
  id: string;
  // The UUID of the budget item
  uuid: string;
  // The name of the budget item
  name: string;
  // The amount of the budget item
  amount: number;
  // The name of the finance category
  financeCategoryName: string;
  // The name of the user-defined label
  userDefinedLabelName: string;
  createdBy: string;
  updatedBy: string;
};

export type BudgetItem = {
  id: string;
  uuid: string;
  name: string;
  amount: number;
  financeCategoryId: string;
  userDefinedLabelId: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
};

export type FinanceCategory = {
  id: string;
  uuid: string;
  name: string;
};

export type UserDefinedLabel = {
  id: string;
  uuid: string;
  name: string;
  color: string;
};

/**
  GET `/budget-items/summary`: Get a summary of all budget items
  GET `/budget-items/summary/:id`: Get a summary of a specific budget item

  GET `/budget-items`: Get all budget items
  GET `/budget-items/:id`: Get a specific budget item
  POST `/budget-items`: Create a new budget item
  PUT `/budget-items/:id`: Update a specific budget item
  DELETE `/budget-items/:id`: Delete a specific budget item

  GET `/finance-categories`: Get all finance categories
  GET `/finance-categories/:id`: Get a specific finance category
  POST `/finance-categories`: Create a new finance category
  PUT `/finance-categories/:id`: Update a specific finance category
  DELETE `/finance-categories/:id`: Delete a specific finance category


  GET `/user-defined-labels`: Get all user-defined labels
  GET `/user-defined-labels/:id`: Get a specific user-defined label
  POST `/user-defined-labels`: Create a new user-defined label
  PUT `/user-defined-labels/:id`: Update a specific user-defined label
  DELETE `/user-defined-labels/:id`: Delete a specific user-defined label
 */
