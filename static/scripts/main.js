import {calcSeasonEnd} from './calculate_date'
var form = document.getElementById('form');

function handleForm(event) {
  var userYear = document.querySelector('#year');
  var userMonth = document.querySelector('#month');
  var userDay = document.querySelector('#day');
  calcSeasonEnd(parseInt(userYear.value, 10), userMonth.value, parseInt(userDay.value, 10));
  event.preventDefault(); // prevent page refresh
} 
form.addEventListener('submit', handleForm);
