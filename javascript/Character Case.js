var name = prompt("What is your name?");
var nameChar = name.slice(0,1);
var nameChar = nameChar.toUpperCase();
var restName = name.slice(1,name.length);
var restName = restName.toLowerCase();

alert ("Hello " + nameChar + restName);
