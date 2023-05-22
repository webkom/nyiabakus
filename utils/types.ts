export type ApiResponse<T> = {
  next: string | null;
  previous: string | null;
  results: T;
};

type ApiBase = {
  id: number;
  title: string;
  description: string;
  cover: string | null;
  coverPlaceholder: string | null;
  location: string;
  /* Allow extra values */
  [x: string | number | symbol]: unknown;
};

export type ApiEvent = ApiBase & {
  startTime: string;
  endTime: string;
};

export type Event = ApiBase & {
  startTime: Date;
  endTime: Date;
};
