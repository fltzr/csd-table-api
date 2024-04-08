import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { UpdateParams } from '../common/types/api-types';
import type { BudgetItem, FinanceCategory, UserDefinedLabel } from './types';
import { BudgetItemSummaryApi, BudgetItemApi, FinanceCategoryApi, UserDefinedLabelApi } from './api';

// Budget item catalog hook
export const useBudgetItemCatalog = () => {
  const useReadQuery = useQuery({
    queryKey: ['budget-item-catalog'],
    queryFn: BudgetItemSummaryApi.read,
    initialData: { items: [], totalCount: 0 },
    retry: false,
  });
  const useReadByIdQuery = (id: string) =>
    useQuery({
      queryKey: ['budget-item-catalog', id],
      queryFn: () => BudgetItemSummaryApi.readById(id),
    });

  return {
    useReadQuery,
    useReadByIdQuery,
  };
};

// Base budget item hook
export const useBudgetItems = () => {
  const queryClient = useQueryClient();

  const useReadQuery = useQuery({ queryKey: ['base-budget-items'], queryFn: BudgetItemApi.read });

  const useReadByIdQuery = (id: string) =>
    useQuery({ queryKey: ['base-budget-items', id], queryFn: () => BudgetItemApi.readById(id) });

  const useCreateMutation = useMutation({
    mutationFn: (data: BudgetItem) => BudgetItemApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['base-budget-items'] });
    },
  });

  const useUpdateMutation = useMutation({
    mutationFn: ({ id, data }: UpdateParams<BudgetItem>) => BudgetItemApi.update({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['base-budget-items'] });
    },
  });

  const useDeleteMutation = useMutation({
    mutationFn: (id: string) => BudgetItemApi.delete(id),
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
    queryFn: UserDefinedLabelApi.read,
  });

  const useReadByIdQuery = (id: string) =>
    useQuery({
      queryKey: ['user-defined-categories', id],
      queryFn: () => UserDefinedLabelApi.readById(id),
    });

  const useCreateMutation = useMutation({
    mutationFn: (data: UserDefinedLabel) => UserDefinedLabelApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-defined-categories'] });
    },
  });

  const useUpdateMutation = useMutation({
    mutationFn: ({ id, data }: UpdateParams<UserDefinedLabel>) =>
      UserDefinedLabelApi.update({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-defined-categories'] });
    },
  });

  const useDeleteMutation = useMutation({
    mutationFn: (id: string) => UserDefinedLabelApi.delete(id),
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
