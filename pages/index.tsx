import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FPInfoSection from "@/components/FPInfoSection/FPInfoSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ny i Abakus</title>
        <meta
          name="description"
          content="Informasjon til nye studenter på Datateknologi og Kommunikasjonsteknologi på NTNU"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <FPInfoSection />
      </main>
    </>
  );
}
