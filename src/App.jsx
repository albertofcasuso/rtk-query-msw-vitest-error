import { useTestQuery } from "./services/test";

export const App = () => {
  const { data } = useTestQuery({ page: 1, limit: 10 });
  console.log(data);
  return (
    <>
      <h1>{data ? data.data.map((i) => i) : "loading"}</h1>
    </>
  );
};
