import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import InfoSectionTrondheim from "@/components/InfoSectionTrondheim";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import InfoSectionPreparation from "@/components/InfoSectionPreparation";
import InfoSectionFP from "@/components/InfoSectionFP";
import InfoSectionStudy from "@/components/InfoSectionStudy";
import InfoSectionStudentPub from "@/components/InfoSectionStudentPub";
import QuickLinks from "@/components/QuickLinks";
import HeaderCards from "@/components/Header/HeaderCards";

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
        <Navbar />
        <Header />
        <QuickLinks />
        <HeaderCards />
        <InfoSectionPreparation />
        <InfoSectionTrondheim />
        <InfoSectionStudentPub />
        <InfoSectionFP />
        <InfoSectionStudy />
      </main>
    </>
  );
}
