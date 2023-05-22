import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { SetStateAction, useState } from "react";
import EventsViewSelector from "@/components/EventsViewSelector";
import EventsListView from "@/components/EventsListView";
import { mockEvents } from "@/utils/mockData";
import EventsCalendarView from "@/components/EventsCalendarView";

const inter = Inter({ subsets: ["latin"] });

export enum EVENT_LIST_VIEWS {
  Calendar,
  List,
}

export default function Events() {
  const [selectedView, setSelectedView] = useState<EVENT_LIST_VIEWS>(
    EVENT_LIST_VIEWS.List
  );
  // TODO Replace this with actual API fetching later on
  const events = mockEvents;

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
          <EventsViewSelector
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
          {selectedView === EVENT_LIST_VIEWS.List && (
            <EventsListView events={events} />
          )}
          {selectedView === EVENT_LIST_VIEWS.Calendar && (
            <EventsCalendarView events={events} />
          )}
        </InfoSectionWrapper>
      </main>
    </>
  );
}
