import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Table, { TableProps } from '@cloudscape-design/components/table';
import Header from '@cloudscape-design/components/header';
import Select from '@cloudscape-design/components/select';

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
  categoryName: string;
  companyName: string;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const getItems = () => api.get<Item[]>('/finances/budget-items').then((response) => response.data);
const getCategories = () =>
  api.get<{ id: string; name: string }[]>('/finances/categories').then((response) => response.data);

const tableColumnDefinitions = (
  categoriesQuery: ReturnType<typeof useQuery<{ id: string; name: string }[]>>,
): TableProps.ColumnDefinition<Item>[] => [
  {
    id: 'id',
    header: 'ID',
    cell: (item) => item.id,
  },
  {
    id: 'name',
    header: 'Name',
    cell: (item) => item.name,
  },
  {
    id: 'price',
    header: 'Price',
    cell: (item) => item.price,
  },
  {
    id: 'description',
    header: 'Description',
    cell: (item) => item.description,
  },
  {
    id: 'categoryName',
    header: 'Category name',
    cell: (item) => item.categoryName,
    editConfig: {
      editingCell: (item, { currentValue, setValue }) => (
        <Select
          selectedOption={currentValue ?? item.categoryName}
          options={categoriesQuery.data?.map((value) => ({
            value: value.id,
            label: value.name,
          }))}
          onChange={setValue}
        />
      ),
    },
  },
  {
    id: 'companyName',
    header: 'Company name',
    cell: (item) => item.companyName,
  },
];

const TablePage = () => {
  const itemsQuery = useQuery({ queryKey: ['items'], queryFn: getItems, initialData: [], retry: false });
  const categoriesQuery = useQuery({
    queryKey: ['cateogires'],
    queryFn: getCategories,
    initialData: [],
    retry: false,
    enabled: false,
  });

  return (
    <Table<Item>
      variant='borderless'
      items={itemsQuery.data}
      columnDefinitions={tableColumnDefinitions(categoriesQuery)}
      loading={itemsQuery.isFetching}
      header={<Header variant='h2'>Items</Header>}
    />
  );
};

export const Component = TablePage;
