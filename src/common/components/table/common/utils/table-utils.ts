import { capitalize, isEmpty } from 'lodash-es';
import { CollectionPreferencesProps } from '@cloudscape-design/components/collection-preferences';

import type { TableColumnDefinition } from '../../../../types/table';

export const getTextFilterCounterText = ({ count }: { count?: number }) =>
  `${count ?? 0} ${count === 1 ? 'match' : 'matches'}`;

type GetHeaderCounterTextParams = {
  items: readonly unknown[];
  selectedItems?: readonly unknown[];
  totalItems: number;
};
export const getHeaderCounterText = ({ selectedItems, totalItems }: GetHeaderCounterTextParams) =>
  selectedItems && !isEmpty(selectedItems) ?
    `(${selectedItems.length}/${totalItems})`
  : `(${totalItems})`;

// table-preferences
export const createPageSizeOptions = (resource: string) => [
  { value: 10, label: `10 ${capitalize(resource)}s` },
  { value: 15, label: `15 ${capitalize(resource)}s` },
  { value: 20, label: `20 ${capitalize(resource)}s` },
];

// table-preferences
export const createContentDisplayOptions = (
  columnDefinitions: TableColumnDefinition<unknown>[],
): CollectionPreferencesProps.ContentDisplayOption[] =>
  columnDefinitions.map((columnDefinition) => ({
    id: columnDefinition.id,
    label: columnDefinition.header?.toString() ?? '',
    alwaysVisible: columnDefinition.id === 'id',
  }));
