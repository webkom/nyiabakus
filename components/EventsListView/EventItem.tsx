import { Event } from "@/utils/types";
import styles from "./styles.module.css";

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div
      className={`${styles.eventItem} ${
        new Date() > event.endTime && styles.past
      }`}
    >
      <p className={styles.eventTitle}>{event.title}</p>
      <div className={styles.eventDetails}>
        <p>
          {event.startTime.toLocaleTimeString(["no-NB"], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {event.endTime.toLocaleTimeString(["no-NB"], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>{event.location}</p>
      </div>
    </div>
  );
};

export default EventItem;
