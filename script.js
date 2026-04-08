const display = document.getElementById('display');


function append(value){
display.value += value;

}
function clearDisplay(){
display.value='';

}
function calculate(){

  try{
    display.value = eval(display.value)
  } 
  catch (error){
    display.value = 'Error'
  } 
}
function deleteLast(){
    display.value= display.value.slice(0, -1);
}
function toggleSign(){
  let display = document.getElementById("display");
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1); // remove minus
  }
else {
  display.value = "-" + display.value; // add minus
}
  }
  function percentage() {
let display = document.getElementById("display");
if (display.value ==="") return;
display.value = parseFloat(display.value) / 100;

  }