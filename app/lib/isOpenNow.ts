export function getTodaySchedule(
  openingHours: {
    day: string;
    open: string;
    close: string;
    closed: boolean;
  }[]
) {
  const now = new Date();

  const today = now.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return openingHours.find(
    (day) => day.day === today
  );
}

export function isOpenNow(
  openingHours: {
    day: string;
    open: string;
    close: string;
    closed: boolean;
  }[]
) {
  const schedule = getTodaySchedule(openingHours);

  if (!schedule || schedule.closed) {
    return false;
  }

  const now = new Date();

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  const [openHour, openMinute] =
    schedule.open.split(":").map(Number);

  const [closeHour, closeMinute] =
    schedule.close.split(":").map(Number);

  const openMinutes =
    openHour * 60 + openMinute;

  const closeMinutes =
    closeHour * 60 + closeMinute;

  return (
    currentMinutes >= openMinutes &&
    currentMinutes <= closeMinutes
  );
}