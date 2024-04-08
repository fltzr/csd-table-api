import { useState } from 'react';

import Table from '../../common/components/table';
import { useBudgetItemCatalog } from '../hooks';
import { BudgetItemSummary } from '../types';
import { TableColumnDefinition } from '../../common/types/table';
import Input from '@cloudscape-design/components/input';

const budgetItemSummaryColumnDefinitions: TableColumnDefinition<BudgetItemSummary>[] = [
  {
    id: 'id',
    sortingField: 'id',
    header: 'id',
    cell: (item) => item.id,
    width: 100,
  },
  {
    id: 'name',
    sortingField: 'name',
    header: 'Name',
    cell: (item) => item.name,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <Input
          type='text'
          value={currentValue ?? item.name}
          onChange={(event) => setValue(event.detail.value)}
        />
      ),
      validation: (item, value) => {
        console.log(`item: ${JSON.stringify(item, null, 2)}`);
        console.log(`value: ${JSON.stringify(value, null, 2)}`);

        return 'Valid';
      },
    },
  },
  {
    id: 'amount',
    sortingField: 'amount',
    header: 'Amount',
    cell: (item) => item.amount,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <Input
          type='number'
          value={currentValue ?? item.amount}
          onChange={(event) => setValue(event.detail.value)}
        />
      ),
    },
  },
  {
    id: 'financeCategoryName',
    sortingField: 'financeCategoryName',
    header: 'Category',
    cell: (item) => item.financeCategoryName,
    width: 150,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <Input
          type='text'
          value={currentValue ?? item.financeCategoryName}
          onChange={(event) => setValue(event.detail.value)}
        />
      ),
    },
  },
  {
    id: 'userDefinedLabelName',
    sortingField: 'userDefinedLabelName',
    header: 'Label',
    cell: (item) => item.userDefinedLabelName,
    width: 150,
    editConfig: {
      ariaLabel: 'User Defined Label Name',
      editingCell: (item, { currentValue, setValue }) => (
        <Input
          type='text'
          value={currentValue ?? item.userDefinedLabelName}
          onChange={(event) => setValue(event.detail.value)}
        />
      ),
      constraintText: 'User Defined Label Name must be a string',
      editIconAriaLabel: 'Edit User Defined Label Name',
    },
  },
];

const isKeyOfBudgetItemSummary = (
  key: string,
  item: BudgetItemSummary,
): key is keyof BudgetItemSummary => key in item;

const BudgetItemsOverview = () => {
  const [selectedItems, setSelectedItems] = useState<BudgetItemSummary[]>([]);
  const budgetItemsCatalogApi = useBudgetItemCatalog();

  return (
    <Table<BudgetItemSummary>
      items={budgetItemsCatalogApi.useReadQuery.data?.items}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      columnDefinitions={budgetItemSummaryColumnDefinitions}
      loading={budgetItemsCatalogApi.useReadQuery.isLoading}
      loadingText='Loading budget items...'
      variant='borderless'
      localstorageKeyPrefix='BudgetItemsCatalog'
      resource='budget item'
      onSubmitEdit={(item, column, newValue) => {
        // const columnId = String(column.id);
        // const updatedItem = { [columnId]: newValue };
        // if (isKeyOfBudgetItemSummary(columnId, item)) {
        //   console.log(`Original item: ${JSON.stringify(item[columnId], null, 2)}`);
        //   console.log(`Updated item: ${JSON.stringify(updatedItem, null, 2)}`);
        // }
      }}
    />
  );
};

export const Component = BudgetItemsOverview;
