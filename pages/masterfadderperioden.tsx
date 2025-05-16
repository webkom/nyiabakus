import styles from "@/styles/Home.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { useEffect, useMemo, useState } from "react";
import EventsListView from "@/components/EventsListView";
import { deserializeEvents, fetchEvents } from "@/utils/api";
import { NextPage } from "next";
import { ApiEvent } from "@/utils/types";
import Link from "next/link";
import { groq } from "next-sanity";
import { TypedObject } from "sanity";
import { FPGroups } from "@/schemas/dayDescription";
import { FACEBOOK_GROUP_FOURTHYEARS, MIDT, MSTCNNS } from "@/utils/constants";
import { sanityClient } from "@/utils/sanity";
import { BlacklistType, Settings, withSettings } from "@/utils/settings";

export type DayDescription = {
  date: string;
  title: string;
  content: TypedObject[];
  fpGroup?: (typeof FPGroups)[number]["value"];
};

type EventsProps = {
  dayDescriptions: DayDescription[];
  settings: Settings;
};

export const Events: NextPage<EventsProps> = ({
  dayDescriptions,
  settings,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiEvents, setApiEvents] = useState<ApiEvent[]>([]);
  const events = useMemo(() => deserializeEvents(apiEvents), [apiEvents]);
  useEffect(() => {
    (async () => {
      try {
        const apiEvents = await fetchEvents(BlacklistType.MFP, settings);
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
        <h2 className={styles.title}>Masterfadderperioden</h2>
        <p>
          Masterfadderperioden er for alle som begynner på <b>2-årig master</b>.
          Begynner du på 5-årig integrert master? Gå til{" "}
          <Link href={"/events"}>Fadderperioden</Link>.
        </p>
        <p>
          NB! Dette er en plan fra linjeforeningen din, Abakus, som ikke
          inkluderer alle detaljer om det obligatoriske opplegget fra
          instituttet/fakultetet. For å være sikker på at du ikke går glipp av
          noe, sjekk ut NTNU sin side som hører til ditt studie;
          <br />
          <a href="https://www.ntnu.no/studier/mstcnns">
            2-årig: {MSTCNNS.name} ({MSTCNNS.shorthand})
          </a>{" "}
          <br />
          <a href="https://www.ntnu.no/studier/midt">
            2-årig: {MIDT.name} ({MIDT.shorthand})
          </a>
        </p>
        <p>
          Fadderperioden for {MIDT.name} og {MSTCNNS.name} er arrangert av
          Abakus.
        </p>
        <br />
        <p>
          For å bli med må du møte opp på immatrikuleringen, hvor du blir
          plassert i en faddergruppe og får mer informasjon. Hvis du ikke får
          møtt opp, send en epost til{" "}
          <a href="mailto:masterfadderperioden@abakus.no">
            masterfadderperioden@abakus.no
          </a>{" "}
          for å få en faddergruppe.
        </p>
        <p>Oppmøte for {MIDT.name}: 12.15 i H1, Hovedbygget</p>
        <p>Oppmøte for {MSTCNNS.name}: 11.30 i G108, Gamle Elektro</p>
        <p>
          Facebook-gruppe for nye abakuler på 2-årig master:{" "}
          {FACEBOOK_GROUP_FOURTHYEARS === "" ? (
            "TBD"
          ) : (
            <a href={FACEBOOK_GROUP_FOURTHYEARS}>facebook.com/groups/...</a>
          )}
        </p>
      </InfoSectionWrapper>
      <InfoSectionWrapper>
        <EventsListView
          isLoadingEvents={isLoading}
          events={events}
          dayDescriptions={dayDescriptions}
          isTBD={settings?.isTBD}
        />
      </InfoSectionWrapper>
    </>
  );
};

export async function getStaticProps() {
  let dayDescriptions: DayDescription[] = [];
  try {
    const currentYear = new Date().getFullYear();
    dayDescriptions = await sanityClient.fetch(
      groq`*[_type == "mfpDayDescription" && date > '${currentYear}-01-01'] | order(date asc)`
    );
  } catch (e) {}

  return {
    props: await withSettings({
      dayDescriptions,
    }),
  };
}

export default Events;
