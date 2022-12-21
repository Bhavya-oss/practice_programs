let fact=1
function factorial(a)
{
    fact=1;
    for(i=a;i>=1;i--)
    {
        fact=fact*i
    }
    console.log("factorial is",fact);

}
factorial(5);
