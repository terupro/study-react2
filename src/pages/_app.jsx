import Head from "next/head";
import "src/styles/globals.css";
import { Layout } from "src/components/Layout/Index";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <h1 className="text-red-500">Hello world!</h1>
      </Layout>
    </>
  );
};

export default MyApp;
