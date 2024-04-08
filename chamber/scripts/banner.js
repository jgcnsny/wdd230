const currentDate = new Date().getDay();
const bannerContainer = document.querySelector('#banner')

if (currentDate >= 1 && currentDate <= 3) {

    bannerContainer.style.display = 'block';

}

document.getElementById('closeButton').addEventListener('click', function() {
    bannerContainer.style.display = 'none';
});