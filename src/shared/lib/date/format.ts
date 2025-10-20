export function formatDayMonth(date: Date, locale: string): string {
  const day = date.getDate();
  const monthFmt = new Intl.DateTimeFormat(locale, { month: "short" }).format(
    date
  );
  return `${day} ${monthFmt}`;
}

export function formatWeekdayShort(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
}

export function formatTime(date: Date, locale: string, hour12 = false): string {
  return date.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12,
  });
}
