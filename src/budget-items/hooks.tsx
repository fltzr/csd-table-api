import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { UpdateParams } from '../common/types/api-types';
import type { BaseBudgetItem, FinanceCategory, UserDefinedCategory } from './types';
import {
  BudgetItemCatalogApi,
  BaseBudgetItemApi,
  FinanceCategoryApi,
  UserDefinedCategoryApi,
} from './api';

// Budget item catalog hook
export const useBudgetItemCatalog = () => {
  const useReadQuery = useQuery({
    queryKey: ['budget-item-catalog'],
    queryFn: BudgetItemCatalogApi.read,
    initialData: { items: [], totalCount: 0 },
    retry: false,
  });
  const useReadByIdQuery = (id: string) =>
    useQuery({
      queryKey: ['budget-item-catalog', id],
      queryFn: () => BudgetItemCatalogApi.readById(id),
    });

  return {
    useReadQuery,
    useReadByIdQuery,
  };
};

// Base budget item hook
export const useBaseBudgetItems = () => {
  const queryClient = useQueryClient();

  const useReadQuery = useQuery({ queryKey: ['base-budget-items'], queryFn: BaseBudgetItemApi.read });

  const useReadByIdQuery = (id: string) =>
    useQuery({ queryKey: ['base-budget-items', id], queryFn: () => BaseBudgetItemApi.readById(id) });

  const useCreateMutation = useMutation({
    mutationFn: (data: BaseBudgetItem) => BaseBudgetItemApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['base-budget-items'] });
    },
  });

  const useUpdateMutation = useMutation({
    mutationFn: ({ id, data }: UpdateParams<BaseBudgetItem>) => BaseBudgetItemApi.update({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['base-budget-items'] });
    },
  });

  const useDeleteMutation = useMutation({
    mutationFn: (id: string) => BaseBudgetItemApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['base-budget-items'] });
    },
  });

  return {
    useReadQuery,
    useReadByIdQuery,
    useCreateMutation,
    useUpdateMutation,
    useDeleteMutation,
  };
};

// Finance category hook
export const useFinanceCategories = () => {
  const queryClient = useQueryClient();

  const useReadQuery = useQuery({ queryKey: ['finance-categories'], queryFn: FinanceCategoryApi.read });

  const useReadByIdQuery = (id: string) =>
    useQuery({ queryKey: ['finance-categories', id], queryFn: () => FinanceCategoryApi.readById(id) });

  const useCreateMutation = useMutation({
    mutationFn: (data: FinanceCategory) => FinanceCategoryApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['finance-categories'] });
    },
  });

  const useUpdateMutation = useMutation({
    mutationFn: ({ id, data }: UpdateParams<FinanceCategory>) => FinanceCategoryApi.update({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['finance-categories'] });
    },
  });

  const useDeleteMutation = useMutation({
    mutationFn: (id: string) => FinanceCategoryApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['finance-categories'] });
    },
  });

  return {
    useReadQuery,
    useReadByIdQuery,
    useCreateMutation,
    useUpdateMutation,
    useDeleteMutation,
  };
};

// User defined category hook
export const useUserDefinedCategories = () => {
  const queryClient = useQueryClient();

  const useReadQuery = useQuery({
    queryKey: ['user-defined-categories'],
    queryFn: UserDefinedCategoryApi.read,
  });

  const useReadByIdQuery = (id: string) =>
    useQuery({
      queryKey: ['user-defined-categories', id],
      queryFn: () => UserDefinedCategoryApi.readById(id),
    });

  const useCreateMutation = useMutation({
    mutationFn: (data: UserDefinedCategory) => UserDefinedCategoryApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-defined-categories'] });
    },
  });

  const useUpdateMutation = useMutation({
    mutationFn: ({ id, data }: UpdateParams<UserDefinedCategory>) =>
      UserDefinedCategoryApi.update({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-defined-categories'] });
    },
  });

  const useDeleteMutation = useMutation({
    mutationFn: (id: string) => UserDefinedCategoryApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-defined-categories'] });
    },
  });

  return {
    useReadQuery,
    useReadByIdQuery,
    useCreateMutation,
    useUpdateMutation,
    useDeleteMutation,
  };
};
