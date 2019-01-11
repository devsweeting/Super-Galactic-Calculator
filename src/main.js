import { planetAge } from './calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    const userBirthday = $("#birthday").val()
    const planet = $("#planet").val();
    const birthdayDate = new Date(userBirthday);
    const birthday = new planetAge(birthdayDate);
    const age = birthday.calcAge();
    const ageOnPlanet = birthday.calcPlanetAge(planet);
    console.log(planet);
    console.log(age);
    console.log(ageOnPlanet);
  });
});
