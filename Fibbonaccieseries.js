function fibonaccie(n)
{
    a=0;b=1;
    for(i=1;i<=n;i++)
    {
        sum=a+b;
        console.log(sum);
        b=a;
        a=sum;
        
    }
}
fibonaccie(9)
