const currentYear = new Date().getFullYear();

// Populate the current year in the footer
document.getElementById('currentYear').textContent = currentYear;

//Last Modified
let lastModified = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


const hamButton = document.querySelector('#myButton');
const navigation = document.querySelector('.menuLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const darkButton = document.querySelector('#darkBtn');
const body = document.querySelector("body");
const main = document.querySelector("main");

darkButton.addEventListener('click',()=>{
	main.classList.toggle('dark');
    body.classList.toggle('dark');

});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits", numVisits);

