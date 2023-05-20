interface ApiBase {
  id: number;
  title: string;
  description: string;
  cover: string | null;
  coverPlaceholder: string | null;
  location: string;
  /* Allow extra values */
  [x: string | number | symbol]: unknown;
}

export interface ApiEvent extends ApiBase {
  startTime: string;
  endTime: string;
}

export interface Event extends ApiBase {
  startTime: Date;
  endTime: Date;
}
