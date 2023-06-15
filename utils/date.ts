/**
 * Convert date object to string representing day
 *
 * @param date Date object
 * @returns Capitalized weekday dayofmonth. month string ("Tirsdag 4. april")
 */
export const dateToDayString = (date: Date): string => {
  const dateDisplayString = date.toLocaleDateString(["no-NB"], {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const capitalizedDateString =
    dateDisplayString.charAt(0).toUpperCase() + dateDisplayString.slice(1);
  return capitalizedDateString;
};

/**
 * Convert Date object to HH:mm string
 *
 * @param date Date object
 * @returns HH:mm string
 */
export const dateToTimeString = (date: Date): string =>
  date.toLocaleTimeString(["no-NB"], {
    hour: "2-digit",
    minute: "2-digit",
  });

/**
 * Get the number of days between two date objects
 *
 * @param date1 Date object
 * @param date2 Date object
 * @param inclusive True if the count should include the last date
 * @returns number of days between the date objects
 */
export const numberOfDaysBetweenDates = (
  date1: Date,
  date2: Date,
  inclusive: boolean = true
) =>
  Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) +
  (inclusive ? 1 : 0);

/**
 * Compare year, month and date
 *
 * @param date1 Date object
 * @param date2 Date object
 * @returns true if they are equal
 */
export const isSameCalendarDate = (date1: Date, date2: Date) =>
  date1.toLocaleDateString() === date2.toLocaleDateString();
