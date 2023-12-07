/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY;
}

const today: DaysOfWeek = DaysOfWeek.SATURDAY;
const isTodayWeekend: boolean = isWeekend(today);
console.log(`Is today a weekend? ${isTodayWeekend}`);
