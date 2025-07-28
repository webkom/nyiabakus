import styles from "@/styles/Home.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { useEffect, useMemo, useState } from "react";
import EventsListView from "@/components/EventsListView";
import { deserializeEvents, fetchEvents } from "@/utils/api";
import { NextPage } from "next";
import { ApiEvent } from "@/utils/types";
import Link from "@/components/Link";
import { TypedObject } from "sanity";
import { FPGroups } from "@/studio/schemas/dayDescription";
import { FACEBOOK_GROUP_FOURTHYEARS, MIDT, MSTCNNS } from "@/utils/constants";
import getSettings, { BlacklistType, Settings } from "@/studio/api/settings";
import { getMfpDayDescriptions } from "@/studio/api/dayDescriptions";

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
          <Link href="https://www.ntnu.no/studier/mstcnns">
            2-årig: {MSTCNNS.name} ({MSTCNNS.shorthand})
          </Link>{" "}
          <br />
          <Link href="https://www.ntnu.no/studier/midt">
            2-årig: {MIDT.name} ({MIDT.shorthand})
          </Link>
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
          <Link href="mailto:masterfadderperioden@abakus.no">
            masterfadderperioden@abakus.no
          </Link>{" "}
          for å få en faddergruppe.
        </p>
        <p>Oppmøte for {MIDT.name}: 10.00 i H1, Hovedbygget</p>
        <p>Oppmøte for {MSTCNNS.name}: 11.15 i G108, Gamle Elektro</p>
        <p>
          Facebook-gruppe for nye abakuler på 2-årig master:{" "}
          {FACEBOOK_GROUP_FOURTHYEARS === "" ? (
            "TBD"
          ) : (
            <Link href={FACEBOOK_GROUP_FOURTHYEARS}>
              facebook.com/groups/...
            </Link>
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
  const dayDescriptions = await getMfpDayDescriptions();
  const settings = await getSettings();
  return {
    props: {
      dayDescriptions,
      settings,
    },
    revalidate: 60,
  };
}

export default Events;
