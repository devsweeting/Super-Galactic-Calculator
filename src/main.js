import { planetAge } from './calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#userBirthday').submit(function(event) {
    event.preventDefault();
    const birthday = ('March 14, 1995 03:24:00');
    const planetUser = new planetAge(birthday);
    const dansBirthday = ("April 26, 1982 07:00:00");
    const dansPlanetAge = new planetAge(dansBirthday);
  });
});
