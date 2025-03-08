document.getElementById("calculate").addEventListener("click", function () {
    let input = document.getElementById("resistors").value.trim();

    // Ensure input is not empty
    if (input === "") {
        alert("Please enter resistor values!");
        return;
    }

    let resistors = input.split(",").map(r => parseFloat(r.trim()));

    // Validate input
    if (resistors.some(isNaN) || resistors.length === 0) {
        alert("Invalid input! Please enter valid resistor values.");
        return;
    }

    // Calculate Series Resistance (Sum of all resistors)
    let seriesResistance = resistors.reduce((a, b) => a + b, 0).toFixed(2);

    // Calculate Parallel Resistance (Handle division by zero)
    let reciprocalSum = resistors.reduce((sum, r) => sum + (1 / r), 0);
    let parallelResistance = reciprocalSum !== 0 ? (1 / reciprocalSum).toFixed(2) : "Infinity";

    // Display Results
    document.getElementById("series-result").innerText = seriesResistance;
    document.getElementById("parallel-result").innerText = parallelResistance;
});