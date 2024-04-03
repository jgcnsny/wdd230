const membersElement = document.getElementById('members');
let memberList = [];


const  displayMembers = async (member) => {
    member.forEach(member => {
        
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
        const spanAddress = document.createElement('span');
        const spanPhone = document.createElement('span')
        const anchorUrl = document.createElement('a');
        const spanLevel= document.createElement('span')
        const spanDate = document.createElement('span')

        h3Element.textContent = member.name;
        imgElement.setAttribute('src', member.imageUrl);
        imgElement.setAttribute('alt', member.name);
        spanAddress.textContent = `${member.address}`;
        spanPhone.textContent = `${member.phoneNumber}`;
        anchorUrl.setAttribute('href', member.websiteURL);
        anchorUrl.setAttribute('target', '_blank');
        anchorUrl.textContent = `${member.websiteURL}`;
        spanLevel.textContent = `${member.membershipLevel} Membership`;
        spanDate.textContent = `Member since ${member.membershipDate}`;


        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        articleElement.appendChild(spanAddress);
        articleElement.appendChild(spanPhone);
        articleElement.appendChild(anchorUrl);
        articleElement.appendChild(spanLevel);
        articleElement.appendChild(spanDate);

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

 const gridbutton = document.querySelector("#grid");
 const listbutton = document.querySelector("#list");
 
 gridbutton.addEventListener("click", () => {
    membersElement.classList.add("grid");
    membersElement.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    membersElement.classList.add("list");
    membersElement.classList.remove("grid");
}