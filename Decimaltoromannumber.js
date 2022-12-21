function Decimaltoromannber(n)     
{
    while(n != 0)
    {

        if (n >= 1000)       // 1000 - m
        {
         process.stdout.write("m");
           n -= 1000;
        }

        else if (n >= 900)   // 900 -  cm
        {
         process.stdout.write("cm");
           n -= 900;
        }        

        else if (n >= 500)   // 500 - d
        {           
         process.stdout.write("d");
           n -= 500;
        }

        else if (n >= 400)   // 400 -  cd
        {
         process.stdout.write("cd");
           n -= 400;
        }

        else if (n >= 100)   // 100 - c
        {
         process.stdout.write("c");
           n -= 100;                       
        }

        else if (n >= 90)    // 90 - xc
        {
         process.stdout.write("xc");
           n -= 90;                                              
        }

        else if (n >= 50)    // 50 - l
        {
         process.stdout.write("l");
           n -= 50;                                                                     
        }

        else if (n >= 40)    // 40 - xl
        {
         process.stdout.write("xl");           
           n -= 40;
        }

        else if (n >= 10)    // 10 - x
        {
         process.stdout.write("x");
           n -= 10;           
        }

        else if (n >= 9)     // 9 - ix
        {
         process.stdout.write("ix");
           n -= 9;                         
        }

        else if (n >= 5)     // 5 - v
        {
         process.stdout.write("v");
          n -= 5;                                     
        }

        else if (n >= 4)     // 4 - iv
        {
         process.stdout.write("iv");
           n -= 4;                                                            
        }

        else if (n >= 1)     // 1 - i
        {
         process.stdout.write("i");
           n -= 1;                                                                                   
        }

    }
}
Decimaltoromannber(19)

