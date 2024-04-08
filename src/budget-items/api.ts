import { api } from '../common/utils/axios';
import type { ReadResponse, UpdateParams } from '../common/types/api-types';

import type { BudgetItem, BudgetItemSummary, FinanceCategory, UserDefinedLabel } from './types';

const BUDGET_ITEM_ROUTE = '/budget-items';

// Budget item catalog
const BUDGET_ITEM_SUMMARY_PATH = 'summary';
export const BudgetItemSummaryApi = {
  read: () =>
    api
      .get<ReadResponse<BudgetItemSummary>>(`${BUDGET_ITEM_ROUTE}/${BUDGET_ITEM_SUMMARY_PATH}`)
      .then((res) => res.data),
  readById: (id: string) =>
    api
      .get<BudgetItemSummary>(`${BUDGET_ITEM_ROUTE}/${BUDGET_ITEM_SUMMARY_PATH}/${id}`)
      .then((res) => res.data),
};

// Base budget items
export const BudgetItemApi = {
  read: () => api.get<ReadResponse<BudgetItemSummary>>(BUDGET_ITEM_ROUTE).then((res) => res.data),

  readById: (id: string) =>
    api.get<BudgetItemSummary>(`${BUDGET_ITEM_ROUTE}/${id}`).then((res) => res.data),

  create: (data: BudgetItem) => api.post(BUDGET_ITEM_ROUTE, { data }).then((res) => res),

  update: ({ id, data }: UpdateParams<BudgetItem>) =>
    api.put(`${BUDGET_ITEM_ROUTE}/${id}`, { data }).then((res) => res.data),

  delete: (id: string) =>
    api.delete(`${BUDGET_ITEM_ROUTE}/${id}`, { data: id }).then((res) => res.status),
};

// Finance categories
const FINANCE_CATEGORY_PATH = 'finance-categories';
export const FinanceCategoryApi = {
  read: () =>
    api
      .get<ReadResponse<FinanceCategory>>(`${BUDGET_ITEM_ROUTE}/${FINANCE_CATEGORY_PATH}`)
      .then((res) => res.data),

  readById: (id: string) =>
    api
      .get<FinanceCategory>(`${BUDGET_ITEM_ROUTE}/${FINANCE_CATEGORY_PATH}/${id}`)
      .then((res) => res.data),

  create: (data: FinanceCategory) =>
    api.post(`${BUDGET_ITEM_ROUTE}/${FINANCE_CATEGORY_PATH}/new`, { data }).then((res) => res),

  update: ({ id, data }: UpdateParams<FinanceCategory>) =>
    api.put(`${BUDGET_ITEM_ROUTE}/${FINANCE_CATEGORY_PATH}/${id}`, { data }).then((res) => res.data),

  delete: (id: string) =>
    api.delete(`${BUDGET_ITEM_ROUTE}/${FINANCE_CATEGORY_PATH}`, { data: id }).then((res) => res.status),
};

// User defined categories
const USER_DEFINED_CATEGORY_PATH = 'user-defined-categories';
export const UserDefinedLabelApi = {
  read: () =>
    api
      .get<ReadResponse<UserDefinedLabel>>(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}`)
      .then((res) => res.data),

  readById: (id: string) =>
    api
      .get<UserDefinedLabel>(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}/${id}`)
      .then((res) => res.data),

  create: (data: Omit<UserDefinedLabel, 'id'>) =>
    api.post(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}/new`, { data }).then((res) => res),

  update: ({ id, data }: UpdateParams<UserDefinedLabel>) =>
    api
      .put(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}/${id}`, { data })
      .then((res) => res.data),

  delete: (id: string) =>
    api
      .delete(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}`, { data: id })
      .then((res) => res.status),
};
