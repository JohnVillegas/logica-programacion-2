// Función para convertir Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Función para convertir Celsius a Kelvin
  function convertirCelsiusAKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Obtener la temperatura en Celsius del usuario
  let temperaturaCelsius = prompt("Introduzca la temperatura en grados Celsius: ");
  
  // Validar si la temperatura es un número
  while (isNaN(temperaturaCelsius)) {
    temperaturaCelsius = prompt("Error: Ingrese un número válido para la temperatura en Celsius: ");
  }
  
  // Convertir la temperatura a Fahrenheit y Kelvin
  const temperaturaFahrenheit = convertirCelsiusAFahrenheit(Number(temperaturaCelsius));
  const temperaturaKelvin = convertirCelsiusAKelvin(Number(temperaturaCelsius));
  
  // Mostrar los resultados por consola
  alert(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit.toFixed(2)}°F`);
  alert(`La temperatura en Kelvin es: ${temperaturaKelvin.toFixed(2)}°K`);