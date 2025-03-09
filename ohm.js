function calculateOhmsLaw() {
    let V = parseFloat(document.getElementById("voltage").value);
    let I = parseFloat(document.getElementById("current").value);
    let R = parseFloat(document.getElementById("resistance").value);
    let result = document.getElementById("calculation-result"); // Corrected ID

    if (!isNaN(V) && !isNaN(I) && isNaN(R)) {
        R = (V / I).toFixed(2);
        result.innerText = `Resistance (Ω): ${R}`;
    } else if (!isNaN(V) && !isNaN(R) && isNaN(I)) {
        I = (V / R).toFixed(2);
        result.innerText = `Current (A): ${I}`;
    } else if (!isNaN(I) && !isNaN(R) && isNaN(V)) {
        V = (I * R).toFixed(2);
        result.innerText = `Voltage (V): ${V}`;
    } else {
        result.innerText = "Enter any two values!";
    }
}
