export type BudgetItemCatalog = {
  id: string;
  name: string;
  amount: number;
  financeCategoryName: string;
  userDefinedCategoryName: string;
};

export type BaseBudgetItem = {
  id: string;
  name: string;
  amount: string;
  financeCategoryId: string;
  userDefinedCategoryId: string;
};

export type FinanceCategory = {
  id: string;
  name: string;
};

export type UserDefinedCategory = {
  id: string;
  name: string;
};
