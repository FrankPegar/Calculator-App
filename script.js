function addNumber(number) {
  const display = document.getElementById('display');
  display.value = display.value === '0' ? number : display.value + number;

}

function addOperator(operator) {
  const display = document.getElementById('display');
  const lastChar = display.value.slice(-1);
  if (lastChar === '+' || lastChar === '-' || lastChar === '×' || lastChar === '÷') {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '0';
}

function calculate() {
  const display = document.getElementById('display');
  const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }   
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1) || '0';
}

function addDecimal() {
  const display = document.getElementById('display');
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function percent() {
  try {
    let value = parseFloat(display.value);

    if (isNaN(value)) {
      display.value = "Error";
      return;
    }

    display.value = String(value / 100);
  } catch {
    display.value = "Error";
  }
}