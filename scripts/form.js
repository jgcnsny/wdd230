const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const errorMsg = document.querySelector('#errorMessage');

p2.addEventListener('focusout', checkPass)

function checkPass() {
    if(p1.value !== p2.value){
        p1.value=""
        p2.value=""
        p1.focus()
        errorMsg.textContent = "Password do not match"
    } else {
        errorMsg.textContent=""
    }
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}