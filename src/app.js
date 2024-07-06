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

function generateAllCombinations(arr1, arr2, arr3) {
  let combinations = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        combinations.push(arr1[i] + "" + arr2[j] + arr3[k] + ".com");
      }
    }
  }
  return combinations;
}

function displayResult() {
  let domain = generateAllCombinations(pronoun, adj, noun);
  let result = domain.join("<br>");
  document.getElementById("theDomain").innerHTML = result;
}
