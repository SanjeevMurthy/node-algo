function permutation(str,prefix){
  console.log("***** PERMUTATION *****")
  console.log("Str : %s , Prefix : %s",str,prefix);
  let str_length=str.length;
  if(str_length == 0){
    console.log(">>>>>>>>>>>>>>>>>>>>>> Prefix : ",prefix);
  }else{
    for(let i=0;i<str_length;i++){
      console.log("loop i : ",i);
      console.log("Input string : %s , Input Prefix : %s",str,prefix);
      console.log("str_length : ",str_length);
      let rem=str.substr(0,i)+str.substr(i+1);
      console.log("str1 : ",str.substr(0,i));
      console.log("str2 : ",str.substr(i+1));
      console.log("rem : ",rem);
      permutation(rem,prefix+str.charAt(i))
    }
  }
}

permutation("abcd","");
