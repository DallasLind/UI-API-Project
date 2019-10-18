const url = "https://api.punkapi.com/v2/beers/random"

fetch(url)
    .then(res => res.json())
    .then(res => console.log("success!", res))
	.catch(err => console.log("Something went wrong", err));

let buttons = document.querySelector(".previous.next");
let beer = document.querySelector(".randomBeerImg");

buttons.addEventListener("click", function(evt){
	evt.preventDefault();

	 fetch(url)
        .then(res => res.json())
        .then(res => randomBeerImg.setAttribute('src', res[0].url))
        .catch(err => console.log("Something went wrong", err));
})