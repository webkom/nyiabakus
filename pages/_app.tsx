import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Ny i Abakus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {!router.asPath.includes("studio") && <Navbar />}
        <Component {...pageProps} />
      </main>
    </>
  );
}
