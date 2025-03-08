function calculatePower() {
    let voltage = parseFloat(document.getElementById("voltage").value);
    let current = parseFloat(document.getElementById("current").value);

    if (isNaN(voltage) || isNaN(current)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let power = voltage * current;
    document.getElementById("result").innerText = power.toFixed(2);
}