import { Event } from "@/utils/types";
import styles from "./styles.module.css";

interface EventsCalendarViewProps {
  events: Event[];
}

const EventsCalendarView: React.FC<EventsCalendarViewProps> = ({ events }) => {
  return <div className={styles.eventsCalendar}>TODO</div>;
};

export default EventsCalendarView;
