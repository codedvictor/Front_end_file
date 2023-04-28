function bmiCalculator(weight,height) {
   var weight = prompt("What is your weight");
   var height = prompt("what is your height");
        var bmi = weight/Math.pow(height, 2);
    BMI = Math.round(bmi,2);
    
   return BMI;
};
var BMI = bmiCalculator();
// console.log(BMI)
if (BMI<18.5) {
   alert("Your BMI is " + BMI + ", so you are underweight.")  
}
if (BMI>= 18.5 && BMI<24.9){
   alert("Your BMI is " + BMI + ", so you have a normal weight.")
}
if (BMI >24.9){
   alert("Your BMI is " + BMI + ", so you are overweight")
}