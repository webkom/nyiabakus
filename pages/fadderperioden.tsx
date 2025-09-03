import styles from "@/styles/Home.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import { useEffect, useMemo, useState } from "react";
import EventsListView from "@/components/EventsListView";
import { deserializeEvents, fetchEvents } from "@/utils/api";
import { InferGetStaticPropsType, NextPage } from "next";
import { ApiEvent } from "@/utils/types";
import Link from "@/components/Link";
import { FACEBOOK_GROUP_FIRSTYEARS, MTDT, MTKOM } from "@/utils/constants";
import getSettings, { BlacklistType } from "@/studio/queries/settings";
import { getFpDayDescriptions } from "@/studio/queries/dayDescriptions";
import { getFpDescription } from "@/studio/queries/fpDescription";
import { PortableText } from "next-sanity";

type EventsProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Events: NextPage<EventsProps> = ({
  dayDescriptions,
  fpDescription,
  settings,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiEvents, setApiEvents] = useState<ApiEvent[]>([]);
  const events = useMemo(() => deserializeEvents(apiEvents), [apiEvents]);
  useEffect(() => {
    (async () => {
      try {
        const apiEvents = await fetchEvents(BlacklistType.FP, settings);
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
        {fpDescription.description && (
          <div className={styles.textWrapper}>
            <PortableText value={fpDescription.description} />
          </div>
        )}
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
  return {
    props: {
      dayDescriptions: await getFpDayDescriptions(),
      fpDescription: await getFpDescription(),
      settings: await getSettings(),
    },
    revalidate: 60,
  };
}

export default Events;
