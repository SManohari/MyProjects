let display =  document.querySelector('.js-calculator')

function appendValue(value){
  display.value = display.value+ value;
}

function clearDisplay(){
  display.value = '';
}

function del(){
  display.value = display.value.toString().slice(0,-1);
}

function calc(){
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}