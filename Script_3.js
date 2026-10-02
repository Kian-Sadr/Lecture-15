let output = document.getElementById("text_content");
let header = document.getElementById("header");

function failingFunction(){
  throw "Hasta La Vista, CodeBro";
}

function exceptionTest(){
  try{
    header.textContent = "Only Change Now";
    failingFunction();
    document.body.style.background = "lightblue";
  } catch(exception){
    output.textContent = exception;
  }
  
}
