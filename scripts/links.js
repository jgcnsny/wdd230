const baseURL = 'https://jgcnsny.github.io/wdd230/';
const linksURL = "https://jgcnsny.github.io/wdd230/data/links.json";

async function getLinks(links) {
const response = await fetch(links);
const data = await response.json();
displayLinks(data.weeks);

}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement('li');
        let content = `${weeks.week}: `;

        week.links.forEach((link) => {
            content += `<a href="${link.url}">${link.title}</a>| `;
        });

        li.innerHTML = content;
        document.querySelector('ul').appendChild(li);
    });
};

getLinks(linksURL);