// Function to print powers of 2 from 1 to n

function powersOf2(n){
  console.log("N : ",n);
  if(n<1){
    return 0;
  }else if(n == 1){
    console.log(1);
    return 1;
  }else{

    let prev=powersOf2(Math.floor(n/2));
    let curr=prev*2;
    console.log("N : ",n);
    console.log("Prev : ",prev);
    console.log("curr powersOf2 >>>> : ",curr);
    return curr;
  }
}

powersOf2(50);


function powersOf2New(n) {
  let pow=1;
  if(n<1){
    return 0;
  }else if(n ==1){
    return pow;
  }else{
    while(pow<n){
      if(pow*2 < n){
        pow=pow*2;
        console.log(pow);
      }

    }
  }
  return pow;
}

powersOf2New(50);
