/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document
    .getElementById("generateDomain")
    .addEventListener("click", displayResult);
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomString(arr1, arr2, arr3) {
  let part1 = getRandomElement(arr1);
  let part2 = getRandomElement(arr2);
  let part3 = getRandomElement(arr3);

  return part1 + "" + part2 + "" + part3 + ".com";
}

function displayResult() {
  let domain = generateRandomString(pronoun, adj, noun);
  document.getElementById("theDomain").innerHTML = domain;
}
