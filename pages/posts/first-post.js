import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";
import Layout from "../../components/layout";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum adipisci quas nobis, quo nisi inventore id reiciendis. Nihil dolore
          molestias sed perspiciatis fugiat facere optio ab! Minima dolor vel omnis quasi facilis! Magni in sunt provident quam deserunt dicta
          debitis.
        </p>
        <Alert type={"success"} />
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
