function Decimaltoromannber(n)     
{
    while(n != 0)
    {

        if (n >= 1000)       // 1000 - m
        {
           console.log("m");
           n -= 1000;
        }

        else if (n >= 900)   // 900 -  cm
        {
           console.log("cm");
           n -= 900;
        }        

        else if (n >= 500)   // 500 - d
        {           
           console.log("d");
           n -= 500;
        }

        else if (n >= 400)   // 400 -  cd
        {
           console.log("cd");
           n -= 400;
        }

        else if (n >= 100)   // 100 - c
        {
           console.log("c");
           n -= 100;                       
        }

        else if (n >= 90)    // 90 - xc
        {
           console.log("xc");
           n -= 90;                                              
        }

        else if (n >= 50)    // 50 - l
        {
           console.log("l");
           n -= 50;                                                                     
        }

        else if (n >= 40)    // 40 - xl
        {
           console.log("xl");           
           n -= 40;
        }

        else if (n >= 10)    // 10 - x
        {
           console.log("x");
           n -= 10;           
        }

        else if (n >= 9)     // 9 - ix
        {
           console.log("ix");
           n -= 9;                         
        }

        else if (n >= 5)     // 5 - v
        {
           console.log("v");
          n -= 5;                                     
        }

        else if (n >= 4)     // 4 - iv
        {
           console.log("iv");
           n -= 4;                                                            
        }

        else if (n >= 1)     // 1 - i
        {
           console.log("i");
           n -= 1;                                                                                   
        }

    }
}
Decimaltoromannber(10)

