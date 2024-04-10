document.addEventListener('DOMContentLoaded', function () {
    const costInput = document.getElementById('cost');
    const litresInput = document.getElementById('litres');
    const calculateButton = document.getElementById('calculate');
    const resultParagraph = document.getElementById('result');
  
    // This calculates the total when the button is clicked
    calculateButton.addEventListener('click', function () {
      const cost = parseFloat(costInput.value);
      const litres = parseFloat(litresInput.value);
  
      // Condition for negative inputs
      if (cost >= 0 && litres >= 0) {
        const totalCost = cost * litres;
        resultParagraph.textContent = `$${totalCost.toFixed(2)}`;
      } else {
        resultParagraph.textContent = "Please enter valid numbers :)";
      }
    });
  });
  