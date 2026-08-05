export function isOpenNow(
  openingHours?: {
    day: string;
    open: string;
    close: string;
    closed: boolean;
  }[]
) {
  // No opening hours provided
  if (!openingHours || openingHours.length === 0) {
    return false;
  }

  const now = new Date();

  const today = now.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  const schedule = openingHours.find(
    (day) => day.day === today
  );

  if (!schedule || schedule.closed) {
    return false;
  }

  const [openHour, openMinute] = schedule.open
    .split(":")
    .map(Number);

  const [closeHour, closeMinute] = schedule.close
    .split(":")
    .map(Number);

  const openMinutes = openHour * 60 + openMinute;
  const closeMinutes = closeHour * 60 + closeMinute;

  return (
    currentMinutes >= openMinutes &&
    currentMinutes <= closeMinutes
  );
}