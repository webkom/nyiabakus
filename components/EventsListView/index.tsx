import { dateToDayString, numberOfDaysBetweenDates } from "@/utils/date";
import { Event } from "@/utils/types";
import { useMemo } from "react";
import EventItem from "./EventItem";
import styles from "./styles.module.css";

type EventsListViewProps = {
  events: Event[];
};

type Day = {
  title: string;
  events: Event[];
};

const EventsListView: React.FC<EventsListViewProps> = ({ events }) => {
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
        events: events.filter(
          (event) =>
            event.startTime.toDateString() === currentDate.toDateString()
        ),
      };
    });
  }, [events]);

  return (
    <div className={styles.eventsList}>
      {days.map((day) => (
        <div key={day.title}>
          <p className={styles.dayTitle}>{day.title}</p>
          {day.events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
          {day.events.length === 0 && <p>Ingen arrangementer</p>}
        </div>
      ))}
    </div>
  );
};

export default EventsListView;
