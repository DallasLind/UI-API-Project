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

const url = ("http://api.openweathermap.org/data/2.5/forecast?zip=20005&cnt=5&APPID=28b02b409b42c315420779b2660708b7")
const ul = document.querySelector('ul')


fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log("success!", res.list[0].weather.main)
      let weather = res.list[0].weather.main
      for (let i =0; i < res.list.length; i++) {
        console.log(res.list[i].weather[i].main)
        let li = document.createElement('li')
        li.innerText = res.list[i].weather[i].main
        ul.appendChild(li)
      }
      })
    .catch(err => console.log("Something went wrong", err));

    
