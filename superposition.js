function calculateSuperposition() {
    const voltageInput = document.getElementById("voltages").value.trim();
    const resistanceInput = document.getElementById("resistances").value.trim();
    const resultElement = document.getElementById("result");

    if (!voltageInput || !resistanceInput) {
        resultElement.innerText = "Please enter valid voltage and resistance values.";
        return;
    }

    const voltages = voltageInput.split(",").map(v => parseFloat(v.trim()));
    const resistances = resistanceInput.split(",").map(r => parseFloat(r.trim()));

    // Validate input numbers
    if (voltages.some(isNaN) || resistances.some(isNaN)) {
        resultElement.innerText = "Please enter only numerical values.";
        return;
    }

    if (resistances.some(r => r <= 0)) {
        resultElement.innerText = "Resistance values must be greater than zero.";
        return;
    }

    const totalResistance = resistances.reduce((sum, r) => sum + r, 0);
    let totalCurrent = 0;
    let currentValues = [];

    let results = voltages.map((v, index) => {
        let current = v / totalResistance;
        totalCurrent += current;
        let subscriptIndex = `<sub>${index + 1}</sub>`;
        currentValues.push(`I${subscriptIndex}`);
        return `When V${subscriptIndex} (${v}V) is acting → I${subscriptIndex}: ${current.toFixed(2)}A<br>Result: I${subscriptIndex}: ${current.toFixed(2)}A<br><br>`;
    });

    results.push(`<strong>Total Current: ${currentValues.join(" + ")} = ${totalCurrent.toFixed(2)}A</strong>`);

    resultElement.innerHTML = results.join("");
}
