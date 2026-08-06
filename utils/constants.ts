type Degree = { name: string; shorthand: string };

export const MTDT: Degree = { name: "Datateknologi", shorthand: "Data" };
export const MTKOM: Degree = {
  name: "Cybersikkerhet og datakommunikasjon",
  shorthand: "Cybdat",
};
export const MIDT: Degree = MTDT;
export const MSTCNNS: Degree = {
  name: "Digital Infrastructure and Cyber Security",
  shorthand: "Cybdat",
};

export const FACEBOOK_GROUP_FIRSTYEARS: string =
  "https://www.facebook.com/groups/1021304597481296/";

export const FACEBOOK_GROUP_MIDT: string =
  "https://www.facebook.com/share/g/1CCNF99xtE/";

export const FACEBOOK_GROUP_MSTCNNS: string =
  "https://www.facebook.com/share/g/1EkXvfp3kh/";

type Meeting = { time: string; room: string; url: string };

export const MEETING_MTDT: Meeting = {
  time: "10.15",
  room: "F1, IT-bygget, sydfløy",
  url: "https://link.mazemap.com/8UtwZgCv",
};

export const MEETING_MTKOM: Meeting = {
  time: "11.00",
  room: "KJL5, Kjelhuset",
  url: "https://link.mazemap.com/vidiLFFB",
};

export const MEETING_MIDT: Meeting = {
  time: "11.00",
  room: "R5, Realfagsbygget",
  url: "https://link.mazemap.com/NRqQXlys",
};

export const MEETING_MSTCNNS: Meeting = {
  time: "11:30",
  room: "G108, Gamle Elektro",
  url: "https://link.mazemap.com/n4lU9ccd",
};

