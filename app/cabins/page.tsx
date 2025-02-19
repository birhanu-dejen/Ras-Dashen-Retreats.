import Counter from "../_components/counter";
export const metadata = {
  title: "cabins",
};
export default async function Cabins() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
