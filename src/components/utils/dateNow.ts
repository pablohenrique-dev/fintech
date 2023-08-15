function getDaysInOnMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function dateNow(lastDay?: boolean) {
  const time = new Date();
  const year = String(time.getFullYear());
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");

  if (lastDay) {
    return `${year}-${String(+month - 1).padStart(2, '0')}-${getDaysInOnMonth(+year, +month)}`;
  }

  return `${year}-${month}-${day}`;
}
