import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),

  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], string>({
      query: () => '/products',
    }),

    getProduct: builder.query<Product, string>({
      query: (id: string | number) => `/products/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useGetProductQuery } = productApi;
