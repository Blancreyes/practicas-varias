/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function handleInputName() {
  let name = nameInput.value;
  document.getElementById("nameWithoutVocals").value = removeVocalsAndSpaces(
    name
  );
}

function removeVocalsAndSpaces(name) {
  const vocals = " aeiouAEIOUáéíóúÁÉÍÓÚ";
  let nameWithoutVocalsExit = "";

  for (let i = 0; i < name.length; i++) {
    if (!vocals.includes(name[i])) {
      nameWithoutVocalsExit += name[i];
    }
  }

  return nameWithoutVocalsExit;
}

function calculateIntervalDays(fromDate, toDate = "10/03/2023") {
  let valores = toDate.split("/");
  let date2 = valores[1] + "/" + valores[0] + "/" + valores[2];

  let difference = Math.ceil(
    (new Date(date2) - new Date(fromDate)) / (1000 * 60 * 60 * 24)
  );

  return difference;
}

function handleInputDate() {
  let date1 = startingDate.value;
  document.getElementById("days").value = calculateIntervalDays(date1);
}

const nameInput = document.getElementById("name");
nameInput.addEventListener("blur", handleInputName);

const startingDate = document.getElementById("date");
startingDate.addEventListener("blur", handleInputDate);
