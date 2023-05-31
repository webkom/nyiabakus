import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { useEffect, useMemo, useState } from "react";
import EventsListView from "@/components/EventsListView";
import { deserializeEvents, fetchEvents } from "@/utils/api";
import { NextPage } from "next";
import { ApiEvent } from "@/utils/types";
import Link from "next/link";
import FullscreenImage from "@/components/FullscreenImage";

const inter = Inter({ subsets: ["latin"] });

type EventsProps = {
  apiEvents: ApiEvent[];
  apiError: boolean;
};

export const Events: NextPage<EventsProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiEvents, setApiEvents] = useState<ApiEvent[]>([]);
  const events = useMemo(() => deserializeEvents(apiEvents), [apiEvents]);
  useEffect(() => {
    (async () => {
      try {
        const apiEvents = await fetchEvents();
        setApiEvents(apiEvents);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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
        <InfoSectionWrapper>
          <FullscreenImage
            src="/uc.jpg"
            alt="Under konstruksjon"
            width={530}
            height={355}
            className={styles.fullscreenImage}
          />
        </InfoSectionWrapper>
        <InfoSectionWrapper>
          {isLoading ? (
            <p>Laster inn Abakus-arrangement ...</p>
          ) : events.length ? (
            <EventsListView events={events} />
          ) : (
            <p>
              Klarte ikke hente arrangementene. Hvis problemet vedvarer, sjekk{" "}
              <Link href={"https://abakus.no"}>abakus.no</Link> eller
              facebook-gruppa for nye studenter.
            </p>
          )}
        </InfoSectionWrapper>
      </main>
    </>
  );
};

export default Events;
