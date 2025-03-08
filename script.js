function calculateKVAR() {
    let power = parseFloat(document.getElementById("power").value);
    let pf1 = parseFloat(document.getElementById("pf1").value);
    let pf2 = parseFloat(document.getElementById("pf2").value);

    if (isNaN(power) || isNaN(pf1) || isNaN(pf2) || pf1 >= 1 || pf2 > 1 || pf1 <= 0 || pf2 <= 0 || pf2 <= pf1) {
        alert("Please enter valid values. Desired PF must be greater than Current PF.");
        return;
    }

    let kvar = power * (Math.tan(Math.acos(pf1)) - Math.tan(Math.acos(pf2)));

    if (kvar < 0) kvar = 0; // Prevent negative values

    document.getElementById("result").innerText = kvar.toFixed(2);
}