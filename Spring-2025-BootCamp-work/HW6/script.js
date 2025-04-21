// Lucas and Peter
let lucasMass = 78;
let lucasHeight = 1.69;

let peterMass = 92;
let peterHeight = 1.95;

lucasBMI = lucasMass / (lucasHeight * lucasHeight);
peterBMI = peterMass / (peterHeight * peterHeight);

let lucasHigherBMI = lucasBMI > peterBMI;

console.log(`The BMI of Peter is ${peterBMI}, The BMI of Lucas is ${lucasBMI}, Peter's BMI is higher than lucas's BMI that is ${peterBMI > lucasBMI}`);

// Temperature Converter

let tempCel = 50;
let tempFah = 70;

tempCelChange = (tempCel * 9 / 5) + 32;
tempFahChange = (5 / 9 * (tempFah - 32));

console.log(`${tempCel}°C is ${tempCelChange}°F`);
console.log(`${tempFah}°F is ${tempFahChange}°C`);

// Part C
if (lucasBMI > peterBMI) {
    console.log(`Lucas BMI (${lucasBMI}) is higher than Peter's (${peterBMI}) `);
}
else {
    console.log(`Peter's BMI (${peterBMI}) is higher than Lucas (${lucasBMI})`);
}

// Part D

const convertCelsiusToFahrenheit = (tempCel) => {
    let tempF = (tempCel * 9 / 5) + 32;
    console.log(`${tempCel}°C is ${tempF}°F`);
};

const convertFahrenheitToCelsius = (tempFah) => {
    let tempC = (5 / 9) * (tempFah - 32);
    console.log(`${tempFah}°F is ${tempC}°C`);
};
convertCelsiusToFahrenheit(100);
convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(10);

convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(102);
convertFahrenheitToCelsius(212);