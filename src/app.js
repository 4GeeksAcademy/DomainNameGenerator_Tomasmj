/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    // console.log(pronoun[i]);
    for (let j = 0; j < adj.length; j++) {
      // console.log(adj[j]);
      for (let k = 0; k < noun.length; k++) {
        // console.log(noun[k]);
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
