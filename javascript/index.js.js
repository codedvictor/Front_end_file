// function fibonacciGenerator (n) {
// //Do NOT change any of the code above 👆
    
//     //Write your code here:
     
//  var n1 = 0, n2 = 1, sum;

//     for (var i = 1; i <= n; i++) {
//         console.log(n1);
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
// }  
    
    
//     //console.log an array of fibonacci numbers starting from 0.
    
// //Do NOT change any of the code below 👇
// }
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var output =[];
    
    if (n === 1){
            output = [0];
    }
        else if (n === 2)
        {
            output = [0, 1];
        }
            else
            {
                output = [0, 1];
                
                for (var i = 2; i < n; i++) 
                {
                    output.push(output[output.length - 2] + output[output.length - 1]);
                }
            }
            return (output);
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}


fibonacciGenerator (4);