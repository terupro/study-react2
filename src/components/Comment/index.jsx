import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment.name}</title>
      </Head>
      <h1>{comment.body}</h1>
      <p>{`Name: ${comment.name}`}</p>
      <p>{`Email: ${comment.email}`}</p>
    </div>
  );
};
