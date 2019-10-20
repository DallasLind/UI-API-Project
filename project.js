//accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const url = ("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b390504334b941ad91731bb9adf0af9/42.3601,-71.0589,255657600?exclude=[currently],[flags],[minutely],[hourly]")

const ul = document.querySelector('ul')
const panel1Div = document.querySelector(".panel1");
const panel2Div = document.querySelector(".panel2");
const panel3Div = document.querySelector(".panel3");
const panel4Div = document.querySelector(".panel4");
const panel5Div = document.querySelector(".panel5");
let button = document.querySelectorAll(".button");

// Menu Items for Accordion

fetch(url)
  .then(res => res.json())
  .then(res => {
      console.log("success!", res.daily.data[0].icon)
      let summary = document.createElement("P");
      summary.innerText = res.daily.data[0].icon;
      panel1Div.appendChild(summary);

      let temperatureLow = document.createElement("P");
      temperatureLow.innerText = res.daily.data[0].apparentTemperatureLow;
      panel2Div.appendChild(temperatureLow);

      let temperatureHigh = document.createElement("P");
      temperatureHigh.innerText = res.daily.data[0].apparentTemperatureHigh;
      panel3Div.appendChild(temperatureHigh);

      let precipitation = document.createElement("P");
      precipitation.innerText = res.daily.data[0].precipAccumulation;
      panel4Div.appendChild(precipitation);

      let wind = document.createElement("P");
      wind.innerText = res.daily.data[0].windSpeed;
      panel5Div.appendChild(wind);
      })
    
.catch(err => console.log("err", err))


  
