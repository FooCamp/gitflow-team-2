"use strict";

const myUser = {
    displayName: "Omar Meneses B.",
    userName: "omeneses",
    image: "./images/omar.jpg",
    role: "Test Automation Engineer",
    socialMedia: [
      {
        name: "Github",
        icon: "fa-github",
        link: "https://github.com/omeneses"
      },
      {
        name: "Instagram",
        icon: "fa-instagram",
        link: "https://www.instagram.com/omarmeneses8/"
      },
    ],
  }

function main (user){
    const app = document.getElementById('profile');
    app.className = "hero";


    //Create the hero image container
    const divPhoto = document.createElement('DIV');
    divPhoto.className = "hero-image-container";
    //Create the image tag
    const myPhoto = document.createElement('IMG');
    myPhoto.src = user.image;
    myPhoto.alt = "Omar Meneses picture";
    myPhoto.className = "hero__image";
    divPhoto.appendChild(myPhoto);
    
    //Create the hero User Info container
    const divUserInfo= document.createElement('DIV');
    divUserInfo.classList.add('hero-user-info-container','user-info');
     
    //Create the Username
    const myName = document.createElement('H1');
    myName.classList.add('user-info__displayName');
    myName.innerText = user.displayName;

    //Create the Github Username
    const myUsername = document.createElement('DIV');
    myUsername.classList.add('user-info__github-username');
    myUsername.innerText = user.userName;

    
    //Create a list of social media (name and icon)
    function createSocialMedia(socialNetwork){
        const socialMediaItem = document.createElement('A');
        const socialMediaIcon = document.createElement('I');
        const socialMediaText = document.createElement('DIV');
        socialMediaItem.setAttribute ('href', socialNetwork.link);
        socialMediaText.innerText = socialNetwork.name;
        socialMediaText.classList.add('social-media-items__name');
        socialMediaIcon.classList.add('fa', socialNetwork.icon);
        socialMediaItem.appendChild(socialMediaIcon);
        socialMediaItem.appendChild(socialMediaText);
        return socialMediaItem; 
    }

    const socialMediaInfo = document.createElement('DIV');
    socialMediaInfo.classList = ('user-info__social-media-items');
    const socialMediaNodes = user.socialMedia.map(createSocialMedia);
    
    socialMediaNodes.forEach((node) => {
        socialMediaInfo.appendChild(node);
    });

    
    //Create the Button
    const sendButton= document.createElement('button');
    sendButton.textContent = "Change Background Color";  
    sendButton.className = "user-info__button"; 
    sendButton.addEventListener("click", changeBackgroundColor);
    
    //Create feature to change the background color of the user info container
    function changeBackgroundColor() {
        divUserInfo.classList.toggle("hero-image-container--alt-version");
        myName.classList.toggle("user-info__displayName--alt-version");
      }


    //Injecting elements into the html
    divUserInfo.appendChild(myName);
    divUserInfo.appendChild(myUsername);
    divUserInfo.appendChild(socialMediaInfo);
    divUserInfo.appendChild(sendButton);
    app.appendChild(divPhoto);
    app.appendChild(divUserInfo);

}

main(myUser);
