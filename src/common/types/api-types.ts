export type ReadResponse<T> = {
  items: T[];
  totalCount: number;
};

export type UpdateParams<T extends { id: string }> = {
  id: string;
  data: Omit<T, 'id'>;
};
