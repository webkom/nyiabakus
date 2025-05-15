import styles from "@/styles/Home.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { useEffect, useMemo, useState } from "react";
import EventsListView from "@/components/EventsListView";
import { deserializeEvents, fetchEvents } from "@/utils/api";
import { NextPage } from "next";
import { ApiEvent } from "@/utils/types";
import Link from "next/link";
import FullscreenImage from "@/components/FullscreenImage";
import { groq } from "next-sanity";
import { TypedObject } from "sanity";
import { FPGroups } from "@/schemas/dayDescription";
import { FACEBOOK_GROUP_FIRSTYEARS, MTDT, MTKOM } from "@/utils/constants";
import { sanityClient } from "@/utils/sanity";
import withSettings, { BlacklistType, Settings } from "@/utils/withSettings";

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
        const apiEvents = await fetchEvents({
          ...settings,
          blacklist: settings.blacklists[BlacklistType.FP],
        });
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
          Fadderperioden er for alle som begynner på{" "}
          <b>5-årig integrert master</b>. Begynner du på 2-årig master? Gå til{" "}
          <Link href={"/masterfadderperioden"}>Masterfadderperioden</Link>.
        </p>
        <p>
          NB! Dette er en plan fra linjeforeningen din, Abakus, som ikke
          inkluderer alle detaljer om det obligatoriske opplegget fra
          instituttet/fakultetet. For å være sikker på at du ikke går glipp av
          noe, sjekk ut NTNU sin side som hører til ditt studie;
          <br />
          <a href="https://www.ntnu.no/studier/mtkom">
            5-årig: {MTKOM.name} ({MTKOM.shorthand})
          </a>
          <br />
          <a href="https://www.ntnu.no/studier/mtdt">
            5-årig: {MTDT.name} ({MTDT.shorthand})
          </a>
          <br />
        </p>
        <p>
          Fadderperioden for {MTDT.name} og {MTKOM.name} er arrangert av Abakus.
        </p>
        <br />
        <p>
          For å bli med må du møte opp på immatrikuleringen, hvor du blir
          plassert i en faddergruppe og får mer informasjon. Hvis du ikke får
          møtt opp, send en epost til{" "}
          <a href="mailto:fadderperioden@abakus.no">fadderperioden@abakus.no</a>{" "}
          for å få en faddergruppe.
        </p>
        <p>Oppmøte for {MTDT.name}: TBD</p>
        <p>Oppmøte for {MTKOM.name}: TBD</p>
        <p>
          Facebook-gruppe for nye abakuler på 5-årig integrert master:{" "}
          {FACEBOOK_GROUP_FIRSTYEARS === "" ? (
            "TBD"
          ) : (
            <a href={FACEBOOK_GROUP_FIRSTYEARS}>facebook.com/groups/...</a>
          )}
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
        <EventsListView
          isLoadingEvents={isLoading}
          events={events}
          dayDescriptions={dayDescriptions}
          isTBD={settings.isTBD}
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
      groq`*[_type == "fpDayDescription" && date > '${currentYear}-01-01'] | order(date asc)`
    );
  } catch (e) {}
  return {
    props: await withSettings({
      dayDescriptions,
    }),
  };
}

export default Events;
