function calculateVoltage() {
    let capacitance = parseFloat(document.getElementById("capacitance").value);
    let resistance = parseFloat(document.getElementById("resistance").value);
    let time = parseFloat(document.getElementById("time").value);
    
    if (isNaN(capacitance) || isNaN(resistance) || isNaN(time)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let voltage = 1 - Math.exp(-time / (resistance * capacitance));
    document.getElementById("result").innerText = voltage.toFixed(4);
}