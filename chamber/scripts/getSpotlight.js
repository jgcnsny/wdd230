const memberSpotlight = document.querySelector('#spotlight');
const url = 'https://jgcnsny.github.io/wdd230/chamber/data/members.json';

async function getSpolightMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlightMember(data);
    
}

function selectSpotlightMembers(members) {
    const spotlightMembers = members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
    const selectedSpotlights = [];

    while (selectedSpotlights.length < 3 && spotlightMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
      const selectedMember = spotlightMembers.splice(randomIndex, 1)[0];
      selectedSpotlights.push(selectedMember);
    }

    return selectedSpotlights;
  }

function displaySpotlightMember(members) {
    const memberSpotlight = document.querySelector('#spotlight');
    const spotlightMembers = selectSpotlightMembers(members);

    spotlightMembers.forEach(member => {
        const memberElement = document.createElement('section');
        memberElement.innerHTML = `<h2>${member.name}</h2>
                                    <img src=${member.imageUrl} alt="${member.name}">
                                    <p>${member.address}</p>
                                    <p>${member.phoneNumber}</p>
                                    <a href="${member.websiteURL}" target="_blank">${member.websiteURL}</a>
                                    <p>${member.membershipLevel}</p>
                                    <p>Member since ${member.membershipDate}</p>`;
        memberSpotlight .appendChild(memberElement);
});
}
getSpolightMembers(url);