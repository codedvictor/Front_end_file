function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
 if (year % 4 != 0)
    {
        console.log("Not leap year/");
    }
    else{
        if (year % 100 != 0)
            {
                console.log("Leap year.");
            }
            else{
                if (year % 400 != 0)
                {
                    console.log("Not leap Year");
                }
                else
                console.log("Leap Year");
            }
    }
    

/**************Don't change the code below****************/    

}
isLeap(3000);