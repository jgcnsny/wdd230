const membersElement = document.getElementById('members');
let memberList = [];


const  displayMembers = async (member) => {
    member.forEach(member => {
        
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
        const spanAddress = document.createElement('span');
        const spanPhone = document.createElement('span')
        const spanUrl = document.createElement('span')
        const spanLevel= document.createElement('span')
        const spanDate = document.createElement('span')

        h3Element.textContent = member.name;
        imgElement.setAttribute('src', member.imageUrl);
        imgElement.setAttribute('alt', member.name);
        spanAddress.textContent = `${member.address}`;
        spanPhone.textContent = `${member.phoneNumber}`;
        spanUrl.textContent = `${member.websiteUrl}`;
        spanLevel.textContent = `${member.membershipLevel} Membership`;
        spanDate.textContent = `Member since ${member.membershipDate}`;


        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        articleElement.appendChild(spanAddress);
        articleElement.appendChild(spanPhone);
        articleElement.appendChild(spanUrl);
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