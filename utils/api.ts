import { ApiEvent, ApiResponse, Event } from "@/utils/types";
import { BlacklistType, Settings } from "@/studio/queries/settings";

/**
 * Fetch list of events from LEGO API
 * Filters out blacklisted events
 *
 * @returns List of deserialized Event objects
 */
export const fetchEvents = async (
  type: BlacklistType,
  settings: Settings
) => {
  if (!settings || settings.isTBD) return [];
  const { fromDate, toDate, blacklist } = settings;
  const res = await fetch(
    `https://lego.abakus.no/api/v1/events/?date_after=${fromDate}&date_before=${toDate}`
  );
  const data: ApiResponse<ApiEvent[]> = await res.json();
  return data.results.filter((event) => !blacklist[type].includes(event.id));
};

/**
 * Convert date values from the API from string to Date objects.
 *
 * @param apiEvents List of serialized ApiEvent objects fetched from the LEGO API
 * @returns List of deserialized Event objects
 */
export const deserializeEvents = (apiEvents: ApiEvent[]) =>
  apiEvents.map<Event>((apiEvent) => {
    const event: any = { ...apiEvent };
    event.startTime = new Date(apiEvent.startTime);
    event.endTime = new Date(apiEvent.endTime);
    return { ...event };
  });
