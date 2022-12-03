let temperature = 5
let wind_speed = 30

if (temperature <= 50 && wind_speed >= 3) {
    chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * temperature * Math.pow(wind_speed, 0.16)
    document.getElementById("chill").innerHTML = String(Math.trunc(chill))
}
else {
    document.getElementById("chill-value").innerHTML = "N/A"
}