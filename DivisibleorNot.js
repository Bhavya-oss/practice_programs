function ArrayString(n){
    let arr1=[10,5,17,12,5,6,7];
    for(i=0;i<7;i++){
        if(arr1[i]%n==0)
        {
            console.log(" %d ivisible by %d",arr1[i],n);
        }
            else    
         {
            console.log("%d Not divisible by %d",arr1[i],n);


        }
    }
    console.log("Not divisible by %d",n);

}

ArrayString(2);