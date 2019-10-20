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

const url = ("https://api.darksky.net/forecast/3b390504334b941ad91731bb9adf0af9/42.3601,-71.0589,255657600?exclude=[currently],[flags],[minutely],[hourly]")

// Menu Items for Accordion



    
