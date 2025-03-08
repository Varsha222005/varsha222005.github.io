function calculateSuperposition() {
    let voltageInputs = document.getElementById("voltages").value.split(",");
    let resistanceInputs = document.getElementById("resistances").value.split(",");

    let voltages = voltageInputs.map(v => parseFloat(v.trim()));
    let resistances = resistanceInputs.map(r => parseFloat(r.trim()));

    if (voltages.some(isNaN) || resistances.some(isNaN) || resistances.length === 0) {
        document.getElementById("result").innerText = "Please enter valid numerical values.";
        return;
    }

    let totalResistance = resistances.reduce((sum, r) => sum + r, 0);

    if (totalResistance === 0) {
        document.getElementById("result").innerText = "Total resistance cannot be zero.";
        return;
    }

    let results = voltages.map(v => {
        let current = v / totalResistance;
        return `For voltage ${v}V: Current = ${current.toFixed(2)} A`;
    });

    document.getElementById("result").innerHTML = results.join("<br>");
}
