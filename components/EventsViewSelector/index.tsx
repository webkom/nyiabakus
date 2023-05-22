import { EVENT_LIST_VIEWS } from "@/pages/events";
import styles from "./styles.module.css";

interface EventsViewSelectorProps {
  selectedView: EVENT_LIST_VIEWS;
  setSelectedView: React.Dispatch<React.SetStateAction<EVENT_LIST_VIEWS>>;
}

const EventsViewSelector: React.FC<EventsViewSelectorProps> = ({
  selectedView,
  setSelectedView,
}) => {
  return (
    <div className={styles.eventsViewSelector}>
      <p
        className={
          selectedView === EVENT_LIST_VIEWS.List ? styles.active : undefined
        }
        onClick={() => setSelectedView(EVENT_LIST_VIEWS.List)}
      >
        Liste
      </p>
      <p
        className={
          selectedView === EVENT_LIST_VIEWS.Calendar ? styles.active : undefined
        }
        onClick={() => setSelectedView(EVENT_LIST_VIEWS.Calendar)}
      >
        Kalender
      </p>
    </div>
  );
};

export default EventsViewSelector;
