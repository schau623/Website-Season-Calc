// count num leap years before date
function checkLeap (year) {
  var leap = new Date(year, 1, 29).getMonth() == 1;
  return leap;
}
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
//userYear, userMonth, userDay, endMonth, endDay
function calculateDays(userYear, userMonth, userDay, endMonth, endDay) { // all inputs as int
  // calculate difference
  var userDate = userYear * 365 + userDay;
  userDate += countDaysPassed(userMonth);
  userDate += countLeapYears(userYear, userMonth);
  
  var endDate = 0;
  var endYear = userYear;

  if(userMonth === 12) { // if month is december, increment year by one
    endYear++;
  }
  endDate = endYear * 365 + endDay;
  endDate += countLeapYears (endYear, endMonth);

  endDate += countDaysPassed(endMonth);
  var res = endDate - userDate;
  return res;
}

function calcSeasonEnd(userYear, userMonth, userDay) { // month is str
  var userMonthNum = 0;
  var currSeason;
  var endMonth;
  var endMonthNum = 0;
  var endDay = 0;
  var endYear = userYear;
  var userHemisphere = document.getElementById('hemisphereField').value;
  var isLeapYear = checkLeap(userYear);
  
  // convert month to number and determine season
  if(userMonth == 'January') {
    userMonthNum = 1;
    if(userHemisphere == 'northern') {
      currSeason = 'Winter';
    }
    else {
      currSeason = 'Summer';
    }
  }
  else if(userMonth === 'February') {
    userMonthNum = 2;
    if(userHemisphere === 'northern') {
      currSeason = 'Winter';
    }
    else {
      currSeason = 'Summer';
    }
  }
  else if(userMonth === 'March') {
    userMonthNum = 3;
    if(userHemisphere === 'northern') {
      currSeason = 'Spring';
    }
    else {
      currSeason = 'Fall';
    }
  }
  else if(userMonth === 'April') {
    userMonthNum = 4;
    if(userHemisphere === 'northern') {
      currSeason = 'Spring';
    }
    else {
      currSeason = 'Fall';
    }
  }
  else if(userMonth === 'May') {
    userMonthNum = 5;
    if(userHemisphere === 'northern') {
      currSeason = 'Spring';
    }
    else {
      currSeason = 'Fall';
    }
  }
  else if(userMonth === 'June') {
    userMonthNum = 6;
    if(userHemisphere === 'northern') {
      currSeason = 'Summer';
    }
    else {
      currSeason = 'Winter';
    }
  }
  else if(userMonth === 'July') {
    userMonthNum = 7;
    if(userHemisphere === 'northern') {
      currSeason = 'Summer';
    }
    else {
      currSeason = 'Winter';
    }
  }
  else if(userMonth === 'August') {
    userMonthNum = 8;
    if(userHemisphere === 'northern') {
      currSeason = 'Summer';
    }
    else {
      currSeason = 'Winter';
    }
  }
  else if(userMonth === 'September') {
    userMonthNum = 9;
    if(userHemisphere === 'northern') {
      currSeason = 'Fall';
    }
    else {
      currSeason = 'Spring';
    }
  }
  else if(userMonth === 'October') {
    userMonthNum = 10;
    if(userHemisphere === 'northern') {
      currSeason = 'Fall';
    }
    else {
      currSeason = 'Spring';
    }
  }
  else if(userMonth === 'November') {
    userMonthNum = 11;
    if(userHemisphere === 'northern') {
      currSeason = 'Fall';
    }
    else {
      currSeason = 'Spring';
    }
  }
  else if(userMonth === 'December') {
    userMonthNum = 12;
    if(userHemisphere === 'northern') {
      currSeason = 'Winter';
    }
    else {
      currSeason = 'Summer';
    }
  }
  
  // set end month days and end month
  if(userHemisphere === 'northern') {
    switch(currSeason) {
      case 'Winter':
        endMonthNum = 2;
        endMonth = 'February';
        if(isLeapYear) {
          endDay = 29;
        }
        else {
          endDay = 28;
        }
        break;
      case 'Spring':
        endMonthNum = 5;
        endMonth = 'May';
        endDay = 31;
        break;
      case 'Summer':
        endMonthNum = 8;
        endMonth = 'August';
        endDay = 31;
        break;
      case 'Fall':
        endMonthNum = 11;
        endMonth = 'November';
        endDay = 30;
        break;
    }
  }
  else {
    switch(currSeason) {
      case 'Winter':
        endMonthNum = 8;
        endMonth = 'August';
        endDay = 31;
        break;
      case 'Spring':
        endMonthNum = 11;
        endMonth = 'November';
        endDay = 30;
        break;
      case 'Summer':
        endMonthNum = 2;
        endMonth = 'February';
        if(isLeapYear) {
          endDay = 29;
        }
        else {
          endDay = 28;
        }
        break;
      case 'Fall':
        endMonthNum = 5;
        endMonth = 'May';
        endDay = 31;
        break;
    }
  }
  if(userMonthNum === 12) { // if month is december, increment year by one
    endYear++;
  }
  var inclusive_date = $('.inclusive_box:checked').val();
  var res = calculateDays(userYear, userMonthNum, userDay, endMonthNum, endDay);
  if(inclusive_date) {
    res++;
  }
  
  //seasonEndShowResult(res, currSeason, endDay, endMonth, endYear); 
}

function seasonEndShowResult(res, currSeason, endDays, endMonthStr, endYear) {
  var result = document.getElementById('formResult');
  result.innerHTML = `<p>Current Season: ${currSeason}</p>`;
  result.innerHTML += `<p>Days Left This Season: ${res}</p>`;
  result.innerHTML += `<p>Last Day of the Season: ${endDays} ${endMonthStr}, ${endYear}</p>`;
}

export {calcSeasonEnd};