export function getDaysInOneMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function dateNow(lastDay?: boolean) {
  const time = new Date();
  
  if (lastDay) {
    time.setMonth(time.getMonth() - 1);
    time.setDate(getDaysInOneMonth(time.getFullYear(), time.getMonth() + 1));
  }
  
  return formatDate(time);
}

export function findMonths(currentMonth: number) {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const monthsToDisplay = [];

  for (let i = currentMonth; i > currentMonth - 4; i--) {
    monthsToDisplay.unshift([monthNames[i], i] as const);
  }
  return monthsToDisplay;
}
