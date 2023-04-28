function getMeat(cost, price) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
    
  console.log("Buy "+ eleranNla(cost,price) + " meats from Iya Eleran");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
    
   return calculateChange(cost,price);
}

function eleranNla(cost, price) {
    var eleranNla1 = Math.floor(cost/price);

    return eleranNla1;
    
}
function calculateChange(cost, price){
    var cChange = cost%price;

    return cChange;
}

var change = getMeat(10, 4);
console.log ("Hi Master, this is your " + change + " change.");

// function lifeInweeks(age){
//     var years = age;
//     years = (90-years);
//     var month= (1080 - (years * 12));
//     var days = (32850 - (years * 365));
//     var weeks = (4682 - (years * 52));
    

//         console.log("You have " + days +" days, " + weeks + " weeks, " + month + " months left." );
// }
// lifeInweeks(35);