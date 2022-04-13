import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const fetchPanets = async () => {
  const result = await fetch("https://swapi.dev/api/people");
  return result.json();
};

const Planets = () => {
  const { data, status } = useQuery("Planets", fetchPanets);
  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <div>{planet.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Wrapped() {
  return (
    <QueryClientProvider client={queryClient}>
      <Planets />
    </QueryClientProvider>
  );
}
