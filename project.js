const url = ("http://api.openweathermap.org/data/2.5/forecast?zip=20005,us")

fetch(url)
    .then(res => res.json())
    .then(res => console.log("success!", res))
  .catch(err => console.log("Something went wrong", err));


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