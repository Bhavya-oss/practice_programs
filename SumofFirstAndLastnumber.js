
function sum(n){
    let count=0;
    let r;
    let first;
    let last;

   // console.log(count);
    while(n>0&& count<=3){
        count++;
        r=n%10;
        if(count==1){
            first=r;
        }
       else
         if(count==4){
            last=r;
        }
        else{
        }
n=parseInt(n/10);
    
    }
    console.log(first+last)
}
sum(3286)