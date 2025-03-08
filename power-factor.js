document.getElementById("calculate").addEventListener("click", function() {
    let realPower = parseFloat(document.getElementById("realPower").value);
    let currentPF = parseFloat(document.getElementById("currentPF").value);
    let desiredPF = parseFloat(document.getElementById("desiredPF").value);

    // Validate input values
    if (isNaN(realPower) || isNaN(currentPF) || isNaN(desiredPF) || 
        desiredPF <= 0 || desiredPF > 1 || currentPF <= 0 || currentPF > 1) {
        alert("Please enter valid values. Power Factor should be between 0 and 1.");
        return;
    }

    let currentReactivePower = realPower * Math.tan(Math.acos(currentPF));
    let desiredReactivePower = realPower * Math.tan(Math.acos(desiredPF));

    let requiredCapacitorKVAR = currentReactivePower - desiredReactivePower;
    requiredCapacitorKVAR = requiredCapacitorKVAR.toFixed(2);

    if (requiredCapacitorKVAR < 0) {
        requiredCapacitorKVAR = 0;
    }

    // Correct string interpolation using backticks
    document.getElementById("result").innerText = `Required Capacitor Size: ${requiredCapacitorKVAR} kVAR`;
});
