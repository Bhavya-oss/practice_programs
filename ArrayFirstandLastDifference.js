function ArrayStringDifference(){
    let array=[4,9,5,1,6,3,2,8,0,17];
    let result=[];
    let length=array.length;
    //console.log("length is",length)
    for(i=0;i<length/2;i++){
        result[i]=array[i]-array[length-i-1];

    }
    console.log("Differenced array is",result)

}
ArrayStringDifference();