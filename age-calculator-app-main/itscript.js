// declaring the variables 
const submitButton = document.querySelector(".container_submit-btn");

// form variable
const form = document.querySelector("form");

// the date inputs
const inputDay = document.querySelector('input[name="Dnum"]');
const inputMonth = document.querySelector('input[name="Mnum"]');
const inputYear = document.querySelector('input[name="Ynum"]');

// ??
const allInputs = [...document.querySelectorAll("form input")];
const allLabels = [...document.querySelectorAll("label")];

// the alert message variable
const alertMessage = document.querySelectorAll(".validation-message");

// setting the constraints
const MAX_MONTHS = 12;
const MAX_DAYS = 31;
const MONTH30 = 30;
const MONTH31 = 31;
const MONTH28 = 28;

// ??
const CURRENT_DATE = new Date();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();

// ??
const CURRENT_MONTH = CURRENT_DATE.getMonth() + 1;
const CURRENT_DAY = CURRENT_DATE.getDate();

// Data to be displayed in years, months and days 
const YearData = document.querySelector(".years");
const MonthData = document.querySelector(".months");
const DayData = document.querySelector(".days");

// Declaring the months and setting the consraints
const ALL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MONTHS_30_DAYS = ["April", "June", "September", "November"];

const MONTHS_31_DAYS = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];
const EXCEPTION_MONTH = ["February"];
