// https://calculator.swiftutors.com/diagonal-of-a-square-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const diagonalofaSquareRadio = document.getElementById('diagonalofaSquareRadio');
const lengthofAnySideoftheSquareRadio = document.getElementById('lengthofAnySideoftheSquareRadio');

let diagonalofaSquare;
let lengthofAnySideoftheSquare = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

diagonalofaSquareRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Any Side of the Square';
  lengthofAnySideoftheSquare = v1;
  result.textContent = '';
});

lengthofAnySideoftheSquareRadio.addEventListener('click', function() {
  variable1.textContent = 'Diagonal of a Square';
  diagonalofaSquare = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(diagonalofaSquareRadio.checked)
    result.textContent = `Diagonal of a Square = ${computeDiagonalofaSquare().toFixed(5)}`;

  else if(lengthofAnySideoftheSquareRadio.checked)
    result.textContent = `Length of Any Side of the Square = ${computeLengthofAnySideoftheSquare().toFixed(5)}`;
})

// calculation

function computeDiagonalofaSquare() {
  return Number(lengthofAnySideoftheSquare.value) * Math.sqrt(2);
}

function computeLengthofAnySideoftheSquare() {
  return Number(diagonalofaSquare.value) / Math.sqrt(2);
}