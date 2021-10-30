var result = document.getElementById('result');
var submit = document.getElementById('submit');
var form = document.getElementById('form');

var FallBackSelector = document.querySelector('.dateSelector');
var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day')
var isLeapYear = false;
var hemisphere = document.getElementById('hemisphereField');
var userDaysInMonth = 0;
var endSeasonDaysInMonth = 0;

populateDays(monthSelect.value);
populateYears();

function populateDays(month) {
    // delete the current set of <option> elements out of the
    // day <select>, ready for the next set to be injected
    while(daySelect.firstChild){
      daySelect.removeChild(daySelect.firstChild);
    }
  
    // Create variable to hold new number of days to inject
    var daysInMonth = 0; 
    // 31 or 30 days?
    if(month === 'January' | month === 'March' | month === 'May' | month === 'July' | month === 'August' | month === 'October' | month === 'December') {
      daysInMonth = 31;
    } else if(month === 'April' | month === 'June' | month === 'September' | month === 'November') {
      daysInMonth = 30;
    } else if(month ==="February") {
    // If month is February, calculate whether it is a leap year or not
        var year = yearSelect.value;
        var isLeap = new Date(year, 1, 29).getMonth() == 1;
        isLeapYear = isLeap;
        if(isLeap) {
          daysInMonth = 29;
        }
         else {
          daysInMonth = 28;
         }
    }
    else {
        daysInMonth = 0;
    }
  
    // inject the right number of new <option> elements into the day <select>
    for(i = 1; i <= daysInMonth; i++) {
      var option = document.createElement('option');
      option.textContent = i;
      daySelect.appendChild(option);
    }
  
    // if previous day has already been set, set daySelect's value
    // to that day, to avoid the day jumping back to 1 when you
    // change the year
    if(previousDay) {
      daySelect.value = previousDay;
  
      // If the previous day was set to a high number, say 31, and then
      // you chose a month with less total days in it (e.g. February),
      // this part of the code ensures that the highest day available
      // is selected, rather than showing a blank daySelect
      if(daySelect.value === "") {
        daySelect.value = previousDay - 1;
      }
  
      if(daySelect.value === "") {
        daySelect.value = previousDay - 2;
      }
  
      if(daySelect.value === "") {
        daySelect.value = previousDay - 3;
      }
    }
  }
  
function populateYears() {
    // get this year as a number
    var date = new Date();
    var year = date.getFullYear();
  
    // Make this year, and the 100 years before it available in the year <select>
    for(var i = 0; i <= 100; i++) {
      var option = document.createElement('option');
      option.textContent = year-i;
      yearSelect.appendChild(option);
    }
  }

  function populateYears() {
    // get this year as a number
    var date = new Date();
    var year = date.getFullYear();
  
    // Make this year, and the 100 years before it available in the year <select>
    for(var i = 0; i <= 100; i++) {
      var option = document.createElement('option');
      option.textContent = year-i;
      yearSelect.appendChild(option);
    }
  }
  
  // when the month or year <select> values are changed, rerun populateDays()
  // in case the change affected the number of available days
  yearSelect.onchange = function() {
    populateDays(monthSelect.value);
  }
  
  monthSelect.onchange = function() {
    populateDays(monthSelect.value);
  }
  
  //preserve day selection
  var previousDay;
  
  // update what day has been set to previously
  // see end of populateDays() for usage
  daySelect.onchange = function() {
    previousDay = daySelect.value;
}
// count num leap years before date
function countLeapYears(y, m) {
  var years = y;
  if(m <= 2) {
    years--;
  }
  return (Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400));
}

function countDaysPassed(month) {
  var res = 0;
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for(let i = 0; i < month - 1; i++) {
    res += monthDays[i];
  }
  return res;
}

function calculateDays() {
  var m = monthSelect.value;
  var userMonth = 0;
  var userDay = parseInt(daySelect.value, 10);
  var userYear =  parseInt(yearSelect.value, 10);
  var currSeason;
  var endMonth = 0;
  var endSeasonDaysInMonth = 0;
  var userHemisphere = hemisphere.value;

  // convert month to number and determine season
  if(m == 'January') {
    userMonth = 1;
    if(userHemisphere == 'northern') {
      currSeason = 'Winter';
    }
    else {
      currSeason = 'Summer';
    }
  }
  else if(m === 'February') {
    userMonth = 2;
    if(userHemisphere === 'northern') {
      currSeason = 'Winter';
    }
    else {
      currSeason = 'Summer';
    }
  }
  else if(m === 'March') {
    userMonth = 3;
    if(userHemisphere === 'northern') {
      currSeason = 'Spring';
    }
    else {
      currSeason = 'Fall';
    }
  }
  else if(m === 'April') {
    userMonth = 4;
    if(userHemisphere === 'northern') {
      currSeason = 'Spring';
    }
    else {
      currSeason = 'Fall';
    }
  }
  else if(m === 'May') {
    userMonth = 5;
    if(userHemisphere === 'northern') {
      currSeason = 'Spring';
    }
    else {
      currSeason = 'Fall';
    }
  }
  else if(m === 'June') {
    userMonth = 6;
    if(userHemisphere === 'northern') {
      currSeason = 'Summer';
    }
    else {
      currSeason = 'Winter';
    }
  }
  else if(m === 'July') {
    userMonth = 7;
    if(userHemisphere === 'northern') {
      currSeason = 'Summer';
    }
    else {
      currSeason = 'Winter';
    }
  }
  else if(m === 'August') {
    userMonth = 8;
    if(userHemisphere === 'northern') {
      currSeason = 'Summer';
    }
    else {
      currSeason = 'Winter';
    }
  }
  else if(m === 'September') {
    userMonth = 9;
    if(userHemisphere === 'northern') {
      currSeason = 'Fall';
    }
    else {
      currSeason = 'Spring';
    }
  }
  else if(m === 'October') {
    userMonth = 10;
    if(userHemisphere === 'northern') {
      currSeason = 'Fall';
    }
    else {
      currSeason = 'Spring';
    }
  }
  else if(m === 'November') {
    userMonth = 11;
    if(userHemisphere === 'northern') {
      currSeason = 'Fall';
    }
    else {
      currSeason = 'Spring';
    }
  }
  else if(m === 'December') {
    userMonth = 12;
    if(userHemisphere === 'northern') {
      currSeason = 'Winter';
    }
    else {
      currSeason = 'Summer';
    }
  }

  if(userHemisphere === 'northern') {
    switch(currSeason) {
      case 'Winter':
        endMonth = 2;
        if(isLeapYear) {
          endSeasonDaysInMonth = 29;
        }
        else {
          endSeasonDaysInMonth = 28;
        }
        break;
      case 'Spring':
        endMonth = 5;
        endSeasonDaysInMonth = 31;
        break;
      case 'Summer':
        endMonth = 8;
        endSeasonDaysInMonth = 31;
        break;
      case 'Fall':
        endMonth = 11;
        endSeasonDaysInMonth = 30;
        break;
    }
  }
  else {
    switch(currSeason) {
      case 'Winter':
        endMonth = 8;
        endSeasonDaysInMonth = 31;
        break;
      case 'Spring':
        endMonth = 11;
        endSeasonDaysInMonth = 30;
        break;
      case 'Summer':
        endMonth = 2;
        if(isLeapYear) {
          endSeasonDaysInMonth = 29;
        }
        else {
          endSeasonDaysInMonth = 28;
        }
        break;
      case 'Fall':
        endMonth = 5;
        endSeasonDaysInMonth = 31;
        break;
    }
  }


  // calculate difference
  var userDate = userYear * 365 + userDay;
  userDate += countDaysPassed(userMonth);
  userDate += countLeapYears(userYear, userMonth);
  
  var endDate = 0;

  if(userMonth === 12) {
    endDate = (userYear + 1) * 365 + endSeasonDaysInMonth;
    endDate += countLeapYears(userYear+1, endMonth);
  }
  else {
    endDate = userYear * 365 + endSeasonDaysInMonth;
    endDate += countLeapYears (userYear, endMonth);
  }

  endDate += countDaysPassed(endMonth);
   
  var res = endDate - userDate;
  showResult(res, currSeason);
}

function showResult(data, currSeason) {
  result.innerHTML = `<p>Current Season: ${currSeason}</p>`;
  result.innerHTML += `<p>Days Left This Season: ${data}</p>`;
}

function handleForm(event) {
  calculateDays();
  event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);