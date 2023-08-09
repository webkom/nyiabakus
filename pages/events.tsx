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
import { FPGroups } from "@/schemas/dayDescription";

export type DayDescription = {
  date: string;
  title: string;
  content: TypedObject[];
  fpGroup?: (typeof FPGroups)[number]["value"];
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
      <InfoSectionWrapper contentClassName={styles.fpInfo}>
        <h2 className={styles.title}>Fadderperioden</h2>
        <p>
          NB! Dette er en plan fra linjeforeningen din, Abakus, som ikke
          inkluderer alle detaljer om det obligatoriske opplegget fra
          instituttet/fakultetet. For å være sikker på at du ikke går glipp av
          noe, sjekk ut NTNU sin side som hører til ditt studie;
          <br />
          <a href="https://www.ntnu.no/studier/mtkom">
            5-årig: Kommunikasjonsteknologi og digital sikkerhet (Komtek)
          </a>
          <br />
          <a href="https://www.ntnu.no/studier/mtdt">
            5-årig: Datateknologi (Data)
          </a>
          <br />
          <a href="https://www.ntnu.no/studier/mstcnns">
            2-årig: Digital Infrastructure and Cyber Security (Komtek)
          </a>{" "}
          <br />
          <a href="https://www.ntnu.no/studier/midt">
            2-årig: Datateknologi (Data)
          </a>
        </p>
        <p>
          Fadderperioden for Datateknologi og Kommunikasjonsteknologi er
          arrangert av Abakus.
        </p>
        <p>
          For å bli med må du møte opp på immatrikuleringen, hvor du blir
          plassert i en faddergruppe og får mer informasjon. Hvis du ikke får
          møtt opp, send en epost til{" "}
          <a href="mailto:fadderperioden@abakus.no">fadderperioden@abakus.no</a>{" "}
          (5-årig integrert master) eller{" "}
          <a href="mailto:masterfadderperioden@abakus.no">
            masterfadderperioden@abakus.no
          </a>{" "}
          (2-årig master) for å få en faddergruppe.
        </p>
        <h3 className={styles.subTitle}>5-årig integrert master</h3>
        <p>
          Oppmøte for Datateknologi: Mandag 14. August 12:00 på{" "}
          <Link href={"https://link.mazemap.com/gqncrU4T"}>Kjel 5</Link>
        </p>
        <p>
          Oppmøte for Kommunikasjonsteknologi: Mandag 14. August 10:00 på{" "}
          <Link href={"https://link.mazemap.com/Kpd4nMvI"}>EL2</Link>
        </p>
        <p>
          Facebook-gruppe for nye abakuler på 5-årig integrert master{" "}
          <Link
            href={"https://www.facebook.com/groups/280352384450789/"}
            target={"_blank"}
          >
            finner du her
          </Link>
          .
        </p>
        <h3 className={styles.subTitle}>2-årig master</h3>
        <p>Oppmøte for Datateknologi: TBD</p>
        <p>Oppmøte for Digital Infrastructure and Cyber Security: TBD</p>
        <p>
          Facebook-gruppe for nye abakuler på 2-årig master{" "}
          <Link
            href={"https://www.facebook.com/groups/175376555487442/"}
            target={"_blank"}
          >
            finner du her
          </Link>
          .
        </p>
      </InfoSectionWrapper>
      {/* <InfoSectionWrapper>
        <FullscreenImage
          src="/uc.jpg"
          alt="Under konstruksjon"
          width={530}
          height={355}
          className={styles.fullscreenImage}
        />
      </InfoSectionWrapper> */}
      <InfoSectionWrapper>
        {isLoading ? (
          <p>Laster inn Fadderperiode-arrangementer ...</p>
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
