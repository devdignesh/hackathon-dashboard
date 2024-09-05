import { Dayjs } from "dayjs";

export interface Hackathon {
  id: number;
  name: string;
  startDate: Dayjs | string;
  endDate: Dayjs | string;
  description: string;
  image: string;
  level: string;
}
