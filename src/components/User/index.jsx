import Head from "next/head";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user.name}</title>
      </Head>
      <h1>{user.username}</h1>
      <UserByUserId id={user.id} />
      <p>{`Phone: ${user.phone}`}</p>
      <p>{`Website: ${user.website}`}</p>
    </div>
  );
};
