/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

 enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

function isWeekend(day: WeekDay) {
  if (day === WeekDay.Saturday || day === WeekDay.Sunday) {
    console.log('Today is off-day');
  }
  else {
    console.log("Today is a working day");
}
}


