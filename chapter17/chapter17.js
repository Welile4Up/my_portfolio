let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = ["Sunny", "Misty", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Lightning"];
let minTemp = 0;
let maxTemp = 100;

generateWeather();

function generateWeather() {
    for (let i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}