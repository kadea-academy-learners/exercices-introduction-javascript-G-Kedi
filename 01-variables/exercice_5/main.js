// Exercice 5
// Écrivez votre code ici
let temperatureCelsius = 25;

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(`${temperatureCelsius}°C est égal à ${temperatureFahrenheit}°F`);
