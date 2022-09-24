"use strict";

function username()
  let fname = document.getElementById("first_name");
  let mname = document.getElementById("last_name");
  var lname = document.getElementById("middle_initail");
  var welcome = (`Hello${fname}${mname}${lname}`)
  document.getElementById("greeting").innerHtml = welcome;

var question = prompt("How high would you like to count?");
for (var i = 1; i < 125; i++);
  var counting = "";
  if (i % 3 == 0) {`${counting}New book`}
  if (i % 5 == 0) {`${counting}New  reading`}
