// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiService = createApi({
  reducerPath: 'apiReducerPath',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_EXAMPLE_API_BASE_URL }),
  endpoints: (builder) => ({
    getPostById: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostByIdQuery } = apiService