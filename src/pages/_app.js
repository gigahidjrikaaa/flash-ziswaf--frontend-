import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flash Ziswaf</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
