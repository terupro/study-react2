import classes from "src/styles/Home.module.css";
import Head from "next/head";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostId;
