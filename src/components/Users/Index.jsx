import { useUsers } from "src/hooks/useUsers";
import Link from "next/link";

export const Users = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{`${user.name} (${user.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
