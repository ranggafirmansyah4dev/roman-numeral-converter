let convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", () => {
  let inputElement = document.getElementById("number");
  let output = document.getElementById("output");
  let num = inputElement.valueAsNumber; 

  if (inputElement.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (num < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    function convertToRoman(num) {
      const romanMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
      
      return Object.entries(romanMap).reduce((acc, [roman, value]) => {
          while (num >= value) {
              acc += roman;
              num -= value;
          }
          return acc;
      }, "");
    }
    output.style.fontSize = "40px";
    output.style.letterSpacing = "4px";
    output.innerText = convertToRoman(num);
  }
});