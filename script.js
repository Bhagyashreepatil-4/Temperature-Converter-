document.getElementById("convert-btn").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperature").value.trim();
    const unit = document.getElementById("unit").value;
    const convertedResult = document.getElementById("converted-result");
    if (temperatureInput === "" || isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp, resultText;
    if (unit === "celsius") {
        convertedTemp = (temperature * 9 / 5) + 32; 
        resultText = `${temperature}°C = ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (temperature - 32) * 5 / 9; 
        resultText = `${temperature}°F = ${convertedTemp.toFixed(2)}°C`;
    }


    convertedResult.textContent = resultText;
});
