import dayjs, { Dayjs } from "dayjs";

export const calculateTimeLeft = (date: Dayjs | string) => {
  const eventDate = dayjs(date);
  const now = dayjs();

  const diff = eventDate.diff(now);

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    return { days, hours, minutes };
  }

  return null;
};
