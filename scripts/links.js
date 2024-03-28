const baseURL = 'https://jgcnsny.github.io/wdd230/';
const linksURL = "https://jgcnsny.github.io/wdd230/data/links.json";

async function getLinks(links) {
const response = await fetch(links);
const data = await response.json();
displayLinks(data.weeks);

}

const displayLinks = (weeks) => {
    const linksContainer = document.getElementById('links-container');
  
    weeks.forEach((week) => {
        const listElement = document.createElement('li');
        let weekName = `${week.week}: `;
        let weekLinksHTML = '';

        week.links.forEach((link) => {
    
            weekLinksHTML += `<a href="${link.url}">${link.title}</a>| `;
        });

        listElement.innerHTML = weekName + weekLinksHTML;
        linksContainer.appendChild(listElement);
    });
};
 
getLinks(linksURL);
