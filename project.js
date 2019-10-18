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
    .then(res => console.log("success!", res))
    .then(function(data){
      const accordionSlides = document.querySelectorAll(".accordion");
      data.results.slice(0,5).forEach((accordion, i) => {
        accordion[i].innerHTML = `



        .catch(err => console.log("Something went wrong", err));
        `
      })
    })
  