// The HTML elements inside the parentheses are retrieved and assigned to their respective variables
const costInput = document.getElementById('cost');  
const litresInput = document.getElementById('litres');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

// An event listener is added to activate the function when the button is clicked
calculateButton.addEventListener('click', function () {
    const cost = parseFloat(costInput.value); // The inputted value is converted into a float and assigns it to the variable 'cost'
    const litres = parseFloat(litresInput.value);

// This is a condition to check if the entered values are valid
    if (cost >= 0 && litres >= 0) { // Condition for when the entered values are positive
        const totalCost = cost * litres; // Total cost is calculated after checkin if the values are positive
        resultParagraph.textContent = `$${totalCost.toFixed(2)}`; // The result is displayed
    } else { // Conditions for when the entered values are negative
        resultParagraph.textContent = "Please enter valid numbers :)"; // A warning appears, asking for positive numbers
    }
});
