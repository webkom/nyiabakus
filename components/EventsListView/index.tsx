import { Event } from "@/utils/types";
import EventItem from "./EventItem";
import styles from "./styles.module.css";

interface EventsListViewProps {
  events: Event[];
}

const EventsListView: React.FC<EventsListViewProps> = ({ events }) => {
  // Iterate through the relevant days
  const firstDate = events[0].startTime;
  const lastDate = events[events.length - 1].startTime;
  const dayCount =
    Math.ceil((lastDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)) +
    1;

  return (
    <div className={styles.eventsList}>
      {new Array(dayCount).fill(0).map((_, index) => {
        const date = new Date(firstDate);
        date.setDate(date.getDate() + index);
        const dateDisplayString = date.toLocaleDateString(["no-NB"], {
          weekday: "long",
          day: "numeric",
          month: "long",
        });
        const capitalizedDateString =
          dateDisplayString.charAt(0).toUpperCase() +
          dateDisplayString.slice(1);
        const dateEvents = events.filter(
          (event) => event.startTime.toDateString() === date.toDateString()
        );
        return (
          <div key={date.getDate()}>
            <p className={styles.dayTitle}>{capitalizedDateString}</p>
            {dateEvents.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
            {dateEvents.length === 0 && <p>Ingen arrangementer</p>}
          </div>
        );
      })}
    </div>
  );
};

export default EventsListView;
