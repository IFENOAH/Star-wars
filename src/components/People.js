import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Person from "./Person";

const queryClient = new QueryClient();
const fetchPeople = async () => {
  const result = await fetch("https://swapi.dev/api/people");
  return result.json();
};

const People = () => {
  const { data, status } = useQuery("People", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>People</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Wrapped() {
  return (
    <QueryClientProvider client={queryClient}>
      <People />
    </QueryClientProvider>
  );
}
