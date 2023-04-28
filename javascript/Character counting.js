var tweet = prompt("compose your tweet:");
var tweetCount = tweet.length;
var tweetUnder280 = tweet.slice(0,140);

alert(tweetUnder280);
alert("You have written " + tweetCount + " characters, you have " + (280 - tweetCount) + " characters left");

//You have written 182 characters, you have -42 characters left
