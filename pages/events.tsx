import styles from "@/styles/Home.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { useEffect, useMemo, useState } from "react";
import EventsListView from "@/components/EventsListView";
import { deserializeEvents, fetchEvents } from "@/utils/api";
import { NextPage } from "next";
import { ApiEvent } from "@/utils/types";
import Link from "next/link";
import FullscreenImage from "@/components/FullscreenImage";
import { createClient, groq } from "next-sanity";
import { TypedObject } from "sanity";

export type DayDescription = {
  date: string;
  title: string;
  content: TypedObject[];
};

type EventsProps = {
  dayDescriptions: DayDescription[];
};

export const Events: NextPage<EventsProps> = ({ dayDescriptions }) => {
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
      <InfoSectionWrapper>
        <h2 className={styles.title}>Fadderperioden</h2>
        <p>
          Fadderperioden for datateknologi og kommunikasjonsteknologi er
          arrangert av Abakus.
        </p>
        <p>
          For å bli med må du møte opp på immatrikuleringen, hvor du blir
          plassert i en faddergruppe og får mer informasjon. Hvis du ikke får
          møtt opp, send en epost til{" "}
          <a href="mailto:arrkom@abakus.no">arrkom@abakus.no</a> for å få en
          faddergruppe.
        </p>
        <p>&nbsp; </p>
        <p>Oppmøte for Datateknologi: TBD</p>
        <p>Oppmøte for Kommunikasjonsteknologi: TBD</p>
        <p>&nbsp; </p>
        <p>
          Facebook-gruppe for nye abakuler:{" "}
          <Link
            href={"https://www.facebook.com/groups/280352384450789/"}
            target={"_blank"}
          >
            https://www.facebook.com/groups/280352384450789/
          </Link>
        </p>
      </InfoSectionWrapper>
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
          <EventsListView events={events} dayDescriptions={dayDescriptions} />
        ) : (
          <p>
            Klarte ikke hente arrangementene. Hvis problemet vedvarer, sjekk{" "}
            <Link href={"https://abakus.no"}>abakus.no</Link> eller
            facebook-gruppa for nye studenter.
          </p>
        )}
      </InfoSectionWrapper>
    </>
  );
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false,
});

export async function getStaticProps() {
  let dayDescriptions: DayDescription[] = [];
  try {
    dayDescriptions = await client.fetch(groq`*[_type == "dayDescription"]`);
  } catch (e) {}
  return {
    props: {
      dayDescriptions,
    },
  };
}

export default Events;
