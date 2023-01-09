import { emptyApi } from "./apiSetup";

export const testApi = emptyApi.injectEndpoints({
  endpoints: (build) => ({
    test: build.query({
      query: ({ page = 1, limit = 10 }) => {
        return { url: `test?page=${page}&limit=${limit}` };
      },
      providesTags: ["test"],
      transformErrorResponse: (result) => console.log(result),
    }),
  }),
  overrideExisting: false,
});

export const { useTestQuery,usePrefetch } =
  testApi;
