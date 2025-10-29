const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submitButton");
const clear = document.getElementById("ClearButton");

submit.addEventListener("click", function () {
    if (input.value === "" || isNaN(input.value) || parseFloat(input.value) < 0) {
        alert("you need to enter a number first!");
        return;
    }
    const km = parseFloat(input.value);
    const MILES_PER_KM = 0.621371;
    const miles = km * MILES_PER_KM;
    output.textContent = `${miles.toFixed(2)} Mile`
});
clear.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
});
