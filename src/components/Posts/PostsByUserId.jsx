import Link from "next/link";
import { usePostByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostByUserId(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="block group ">
                <h1 className="text-xl font-bold group-hover:text-blue-500">
                  {post.title}
                </h1>
                <p className="text-lg font-sm text-gray-500 group-hover:text-blue-400">
                  {post.body}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
