import {
  dateToDayString,
  isSameCalendarDate,
  numberOfDaysBetweenDates,
} from "@/utils/date";
import { Event } from "@/utils/types";
import { useMemo } from "react";
import EventItem from "./EventItem";
import styles from "./styles.module.css";
import { PortableText } from "@portabletext/react";
import CollapsibleItem from "./CollapsibleItem";
import { DayDescription } from "@/pages/events";

type EventsListViewProps = {
  events: Event[];
  dayDescriptions: DayDescription[];
};

type Day = {
  title: string;
  events: Event[];
  description?: DayDescription;
};

const EventsListView: React.FC<EventsListViewProps> = ({
  events,
  dayDescriptions,
}) => {
  const days = useMemo<Day[]>(() => {
    const dayCount = numberOfDaysBetweenDates(
      events[0].startTime,
      events[events.length - 1].startTime
    );
    // Initialize a date object to represent the current date in the loop
    let currentDate = new Date(events[0].startTime);
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

  return (
    <div className={styles.eventsList}>
      {days.map((day) => (
        <div key={day.title}>
          <p className={styles.dayTitle}>{day.title}</p>
          {day.description && (
            <CollapsibleItem title="" minHeight="60px">
              <div className={styles.description}>
                <PortableText value={day.description.content} />
              </div>
            </CollapsibleItem>
          )}
          {day.events.length > 0 ? (
            day.events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))
          ) : (
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
