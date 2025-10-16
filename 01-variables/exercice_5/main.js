// Exercice 5
// Écrivez votre code ici
let temperatureCelsius = 25;

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(temperatureCelsius));

module.exports = { temperatureCelsius, celsiusToFahrenheit };