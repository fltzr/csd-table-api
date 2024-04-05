import axios from 'axios';
import type { ReadResponse, UpdateParams } from '../common/types/api-types';
import type { BaseBudgetItem, BudgetItemCatalog, FinanceCategory, UserDefinedCategory } from './types';

const BUDGET_ITEM_ROUTE = '/budget-item-catalog';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Budget item catalog
export const BudgetItemCatalogApi = {
  read: () => api.get<ReadResponse<BudgetItemCatalog>>(BUDGET_ITEM_ROUTE).then((res) => res.data),
  readById: (id: string) =>
    api.get<BudgetItemCatalog>(`${BUDGET_ITEM_ROUTE}/${id}`).then((res) => res.data),
};

// Base budget items
const BASE_BUDGET_ITEM_PATH = 'items';
export const BaseBudgetItemApi = {
  read: () =>
    api
      .get<ReadResponse<BudgetItemCatalog>>(`${BUDGET_ITEM_ROUTE}/${BASE_BUDGET_ITEM_PATH}`)
      .then((res) => res.data),

  readById: (id: string) =>
    api
      .get<BudgetItemCatalog>(`${BUDGET_ITEM_ROUTE}/${BASE_BUDGET_ITEM_PATH}/${id}`)
      .then((res) => res.data),

  create: (data: BaseBudgetItem) =>
    api.post(`${BUDGET_ITEM_ROUTE}/${BASE_BUDGET_ITEM_PATH}/new`, { data }).then((res) => res),

  update: ({ id, data }: UpdateParams<BaseBudgetItem>) =>
    api.put(`${BUDGET_ITEM_ROUTE}/${BASE_BUDGET_ITEM_PATH}/${id}`, { data }).then((res) => res.data),

  delete: (id: string) =>
    api.delete(`${BUDGET_ITEM_ROUTE}/${BASE_BUDGET_ITEM_PATH}`, { data: id }).then((res) => res.status),
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
export const UserDefinedCategoryApi = {
  read: () =>
    api
      .get<ReadResponse<UserDefinedCategory>>(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}`)
      .then((res) => res.data),

  readById: (id: string) =>
    api
      .get<UserDefinedCategory>(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}/${id}`)
      .then((res) => res.data),

  create: (data: Omit<UserDefinedCategory, 'id'>) =>
    api.post(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}/new`, { data }).then((res) => res),

  update: ({ id, data }: UpdateParams<UserDefinedCategory>) =>
    api
      .put(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}/${id}`, { data })
      .then((res) => res.data),

  delete: (id: string) =>
    api
      .delete(`${BUDGET_ITEM_ROUTE}/${USER_DEFINED_CATEGORY_PATH}`, { data: id })
      .then((res) => res.status),
};
