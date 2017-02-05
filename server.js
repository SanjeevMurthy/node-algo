function printUnorderedPairs(){
  let _=require('underscore');
  let array=[];
  array=_.range(1,10);
  console.log("Array length : ",array.length);
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      console.log("[i,j] : [%d, %d]",i,j);
    }
  }
}

function isPrime(number){
  for(let x=2;x<Math.sqrt(number);x++){
    if(number%x == 0){
      return false;
    }
  }
  return true;
}

console.log("IsPrime : ",isPrime(10));
