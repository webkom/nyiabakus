import { DayDescription } from "@/pages/fadderperioden";
import { isTBD } from "@/utils/api";
import {
  dateToDayString,
  isSameCalendarDate,
  numberOfDaysBetweenDates,
} from "@/utils/date";
import { Event } from "@/utils/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { useMemo } from "react";
import CollapsibleItem from "./CollapsibleItem";
import EventItem from "./EventItem";
import styles from "./styles.module.css";

type EventsListViewProps = {
  events: Event[];
  dayDescriptions: DayDescription[];
  isLoadingEvents: boolean;
  expandDayDescriptionsByDefault?: boolean;
};

type Day = {
  title: string;
  events: Event[];
  description?: DayDescription;
};

const components: PortableTextComponents = {
  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

const EventsListView: React.FC<EventsListViewProps> = ({
  events,
  dayDescriptions,
  isLoadingEvents,
  expandDayDescriptionsByDefault,
}) => {
  console.log(dayDescriptions)
  const days = useMemo<Day[]>(() => {
    if (events.length === 0 && dayDescriptions.length === 0) return [];
    let firstDate: Date;
    let lastDate: Date;
    if (events.length === 0) {
      firstDate = new Date(dayDescriptions[0].date);
      lastDate = new Date(dayDescriptions[dayDescriptions.length - 1].date);
    } else if (dayDescriptions.length === 0) {
      firstDate = events[0].startTime;
      lastDate = events[events.length - 1].startTime;
    } else {
      firstDate =
        new Date(dayDescriptions[0].date) < events[0].startTime
          ? new Date(dayDescriptions[0].date)
          : events[0].startTime;
      lastDate =
        new Date(dayDescriptions[dayDescriptions.length - 1].date) >
        events[events.length - 1].startTime
          ? new Date(dayDescriptions[dayDescriptions.length - 1].date)
          : events[events.length - 1].startTime;
    }
    const dayCount = numberOfDaysBetweenDates(firstDate, lastDate);
    // Initialize a date object to represent the current date in the loop
    let currentDate = new Date(firstDate);
    currentDate.setDate(currentDate.getDate() - 1);

    // Iterate over all the days
    return new Array(dayCount).fill(0).map(() => {
      currentDate.setDate(currentDate.getDate() + 1);
      return {
        title: dateToDayString(currentDate),
        events: events.filter((event) =>
          isSameCalendarDate(event.startTime, currentDate)
        ),
        description: dayDescriptions.find((d) => {
          return (
            isSameCalendarDate(new Date(d.date), currentDate) &&
            d.content.length
          );
        }),
      };
    });
  }, [events, dayDescriptions]);

  if (isTBD)
    return (
      <p>Programmet for fadderperioden vil publiseres her når det er ferdig</p>
    );

  if (!isLoadingEvents && events.length === 0 && dayDescriptions.length === 0)
    return (
      <p>
        Klarte ikke hente arrangementer. Hvis problemet vedvarer, sjekk{" "}
        <Link href={"https://abakus.no"}>abakus.no</Link> eller facebook-gruppa
        for nye studenter.
      </p>
    );

  if (!isLoadingEvents && events.length === 0)
    return (
      <p>
        Klarte ikke hente arrangementer fra abakus.no. Du kan fortsatt finne
        alle arrangementene på <Link href={"https://abakus.no"}>abakus.no</Link>
        .
      </p>
    );

  return (
    <div className={styles.eventsList}>
      {days.map((day) => (
        <div key={day.title}>
          <p className={styles.dayTitle}>{day.title}</p>
          {day.description && (
            <CollapsibleItem
              title=""
              minHeight={expandDayDescriptionsByDefault ? undefined : "60px"}
              initiallyOpen={expandDayDescriptionsByDefault}
            >
              <div className={styles.description}>
                <PortableText
                  value={day.description.content}
                  components={components}
                />
              </div>
            </CollapsibleItem>
          )}
          {isLoadingEvents && <p>Laster inn arrangementer fra abakus.no...</p>}
          {day.events &&
            day.events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          {!day.description && day.events.length === 0 && (
            <p>Ingen Fadderperiode-arrangementer</p>
          )}
        </div>
      ))}
      <p>
        Se alle Abakus sine arrangementer på{" "}
        <a href="https://abakus.no/events">abakus.no/events</a>
      </p>
    </div>
  );
};

export default EventsListView;
