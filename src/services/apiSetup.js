import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:"http://localhost:3000"
  }),
  tagTypes: ["test"],
  endpoints: () => ({}),
});
