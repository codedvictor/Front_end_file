var partner = prompt("What is your love name?");
var mySelf = prompt("First name");
   var love = (Math.random(partner) * 100)+1;
    love = Math.round (love);
if (love >70) {
    alert ("Hi " +mySelf+ ", you are " +love+ "% match with " + partner);
}
else {
    alert (love + "% No love in the street");
};