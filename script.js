let buttons = document.querySelectorAll("button");
let dis = document.querySelector(".displayscreen");




function append(char){
    console.log("clicked",char);
  dis.value += char;
    
}


function c(){
  console.log("clear")

   dis.value = "";
}

function calculate(){
  console.log("calculate")
  dis.value = eval(dis.value);
  
}