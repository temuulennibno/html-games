// const dayInNumber = 8;
// let dayText = "";

// if (dayInNumber === 1) {
//   dayText = "Monday";
// } else if (dayInNumber === 2) {
//   dayText = "Tuesday";
// } else if (dayInNumber === 3) {
//   dayText = "Wednesday";
// } else if (dayInNumber === 4) {
//   dayText = "Thursday";
// } else if (dayInNumber === 5) {
//   dayText = "Friday";
// } else if (dayInNumber === 6) {
//   dayText = "Saturday";
// } else if (dayInNumber === 7) {
//   dayText = "Sunday";
// } else {
//   dayText = "Invalid day";
// }

// console.log(dayText);

const dayInNumber = 8;
let dayText = "";

switch (dayInNumber) {
  case 1:
    dayText = "Monday";
    break;
  case 2:
    dayText = "Tuesday";
    break;
  case 3:
    dayText = "Wednesday";
    break;
  case 4:
    dayText = "Thursday";
    break;
  case 5:
    dayText = "Friday";
    break;
  case 6:
    dayText = "Saturday";
    break;
  case 7:
    dayText = "Sunday";
    break;
  default:
    dayText = "Invalid date";
    break;
}

console.log(dayText);
