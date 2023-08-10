import { ApiEvent, ApiResponse, Event } from "./types";

const fromDate = "2023-08-14"; // First day of FP
const toDate = "2023-09-04"; // One day after Immball

// For events in the time period that are not included in FP
const blackListedEventIds: number[] = [3446, 3420, 3452];
const specificBlackListedEventIds = {
  fp: [3461],
  mfp: [
    3431, 3460, 3433, 3435, 3439, 3464, 3437, 3449, 3436, 3453, 3432, 3438,
    3441,
  ],
};

/**
 * Remove events from the list that are not included in FP
 *
 * @param apiEvents Complete list of ApiEvent objects
 * @returns Filtered list of ApiEvent objects
 */
export const removeBlackListedEvents = (
  apiEvents: ApiEvent[],
  type: keyof typeof specificBlackListedEventIds
) =>
  apiEvents.filter(
    (apiEvent) =>
      !blackListedEventIds.includes(apiEvent.id) &&
      !specificBlackListedEventIds[type].includes(apiEvent.id)
  );

/**
 * Fetch list of events from LEGO API
 *
 * @returns List of deserialized Event objects
 */
export const fetchEvents = async (
  type: keyof typeof specificBlackListedEventIds
) => {
  const res = await fetch(
    `https://lego.abakus.no/api/v1/events?date_after=${fromDate}&date_before=${toDate}`
  );
  const data: ApiResponse<ApiEvent[]> = await res.json();
  return removeBlackListedEvents(data.results, type);
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
