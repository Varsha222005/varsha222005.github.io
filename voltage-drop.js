function calculateVoltageDrop() {
    let voltage = parseFloat(document.getElementById("voltage").value);
    let current = parseFloat(document.getElementById("current").value);
    let length = parseFloat(document.getElementById("length").value);
    let resistance = parseFloat(document.getElementById("resistance").value);

    if (isNaN(voltage) || isNaN(current) || isNaN(length) || isNaN(resistance)) {
        alert("Please enter valid values.");
        return;
    }

    let voltageDrop = current * resistance * length * 2; // Multiplied by 2 for return path
    document.getElementById("result").innerText = voltageDrop.toFixed(2);
}