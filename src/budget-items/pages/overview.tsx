import { useState } from 'react';

import Table from '../../common/components/table';
import { useBudgetItemCatalog } from '../hooks';
import { BudgetItemCatalog } from '../types';
import { TableColumnDefinition } from '../../common/types/table';

const budgetItemCatalogColumnDefinitions: TableColumnDefinition<BudgetItemCatalog>[] = [
  {
    id: 'id',
    header: 'id',
    cell: (item) => item.id,
    width: 100,
  },
  {
    id: 'name',
    header: 'Name',
    cell: (item) => item.name,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <input
          type='text'
          value={currentValue ?? item.name}
          onChange={(e) => setValue(e.target.value)}
        />
      ),
    },
  },
  {
    id: 'amount',
    header: 'Amount',
    cell: (item) => item.amount,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <input
          type='number'
          value={currentValue ?? item.amount}
          onChange={(e) => setValue(e.target.value)}
        />
      ),
    },
  },
  {
    id: 'financeCategoryName',
    header: 'financeCategoryName',
    cell: (item) => item.financeCategoryName,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <input
          type='text'
          value={currentValue ?? item.financeCategoryName}
          onChange={(e) => setValue(e.target.value)}
        />
      ),
    },
  },
  {
    id: 'userDefinedCategoryName',
    header: 'User Defined Category',
    cell: (item) => item.userDefinedCategoryName,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <input
          type='text'
          value={currentValue ?? item.userDefinedCategoryName}
          onChange={(e) => setValue(e.target.value)}
        />
      ),
    },
  },
];

const BudgetItemsOverview = () => {
  const [selectedItems, setSelectedItems] = useState<BudgetItemCatalog[]>([]);
  const budgetItemsCatalogApi = useBudgetItemCatalog();

  return (
    <Table<BudgetItemCatalog>
      items={budgetItemsCatalogApi.useReadQuery.data?.items}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      columnDefinitions={budgetItemCatalogColumnDefinitions}
      localstorageKeyPrefix={'BudgetItemsCatalog'}
      resource={'budget item'}
      onSubmitEdit={(item, column, newValue) => {
        console.log('onSubmitEdit', item, column, newValue);
      }}
    />
  );
};

export const Component = BudgetItemsOverview;
