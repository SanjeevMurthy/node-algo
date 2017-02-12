//Implement LIFO data structure
function Stack(size){
  let stack=[];
  let Top=-1;
  let Length=size;

  function Push(element){
    if(stack.length < Length){
      stack.push(element);
      Top++;
    }
  }

  function Pop(){
    if(Top < 0){
      console.log("No more items to Remove");
    }else{
      console.log("Removing : ",stack[Top]);
      stack.pop();
      Top--;
    }
  }

  function CurrentStackSize(){
    console.log("Stack Size : ",stack.length)
  }

  function PrintStack(){
    console.log("Stack Elements");
    console.log(stack.toString());
  }

  function TopElement(){
    console.log("Top element : "+stack[Top]);
  }

  return {
    PUSH:Push,
    POP:Pop,
    SIZE:CurrentStackSize,
    TOP:TopElement,
    PRINT:PrintStack
  }
}
//module.exports=Stack;


var stack=new Stack(10);
stack.PUSH(1);
stack.PUSH(2);
stack.PUSH(3);
stack.PUSH(4);
stack.TOP();
stack.PUSH(5);
stack.PRINT();
stack.POP();
stack.POP();
stack.POP();
stack.POP();
stack.POP();
stack.PRINT();
