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

document.addEventListener("DOMContentLoaded", function() {
    // Get the current date in milliseconds
    var currentDate = Date.now();

    // Retrieve the last visit date from localStorage
    var lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate) {
        // Calculate the difference in milliseconds between current date and last visit date
        var differenceInMs = currentDate - parseInt(lastVisitDate);
        var differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

        // Update the message based on the difference in days
        var message = "";
        if (differenceInDays === 0) {
            message = "Back so soon! Awesome!";
        } else {
            message = "You last visited " + (differenceInDays === 1 ? "1 day" : differenceInDays + " days") + " ago.";
        }
    } else {
        // First visit
        message = "Welcome! Let us know if you have any questions.";
    }

    // Display the message in the sidebar content area
    var sidebarContent = document.querySelector("#dateVisit");
    sidebarContent.textContent = message;

    // Store the current date as the last visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDate.toString());
});