const membersElement = document.getElementById('members');
let memberList = [];


const  displayMembers = async (member) => {
    member.forEach(member => {
        
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');

        h3Element.textContent = member.name;
        imgElement.setAttribute('src', member.imageUrl);
        imgElement.setAttribute('alt', member.name);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        membersElement.appendChild(articleElement);

    });

}



 const getMembers = async () => {
    const response = await fetch ('https://jgcnsny.github.io/wdd230/chamber/data/members.json');
    if (response.ok) {
        const data = await response.json();
        memberList = data;
        displayMembers(data);
      }
 }


 getMembers();