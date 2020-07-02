const myUser = {
    displayName: "Carolina Naranjo Naranjo",
    userName: "caritonaranjo",
    image: "./images/yo.jpg",
    role: "developer",
    socialMedia: [
      {
        name: "@caritonaranjo",
        icon: "fa-github",
        link: "https://github.com/caritonaranjo"
      },
      {
        name: "@kritonaranjo",
        icon: "fa-twitter",
        link: "https://twitter.com/kritonaranjo"
      },
      {
        name: "@carolina.naranjo.naranjo<",
        icon: "fa-instagram",
        link: "https://www.instagram.com/carolina.naranjo.naranjo/"
      },
    ],
  }

const template = `
<section class="personal">
  <div class= " personal__image-container">
      <img  class="personal__image" src="${myUser.image}" alt="my image">
  </div>
  <div class= "personal__info">
      <div>
          <h3 class="personal__container--title">${myUser.displayName}</h3>
          <h4>${myUser.role}</h4>
                          
      </div>            
      <div class="personal__media">
          <div class="media__button">
              <h4 class="media__title">${myUser.socialMedia[0].name}</h4>
              <a href="${myUser.socialMedia[0].link}" target="_blank">
                  <i class="fa ${myUser.socialMedia[0].icon} fa-3x" aria-hidden="true"></i></a>
          </div>
          <div class="media__button">
              <h4 class="media__title">${myUser.socialMedia[2].name}</h4>
              <a href="${myUser.socialMedia[2].link}" target="_blank”">
              <i class="fa  ${myUser.socialMedia[2].icon} fa-3x" aria-hidden="true"></i></a>                
          </div>
          <div class="media__button">
              <h4 class="media__title">${myUser.socialMedia[1].name}</h4>
              <a href="${myUser.socialMedia[1].link}" target="_blank" >
              <i class="fa  ${myUser.socialMedia[1].icon} fa-3x" aria-hidden="true"></i></a>
          </div>
      </div>
      <br/>
      <div >
          <button  id ="button" class="personal__button--styles">CLICK ME</button>
      </div>             
  </div>
</section>
`
const content = document.createElement('section');
content.innerHTML = template;
var my = document.getElementsByClassName('personal__block')
my[0].appendChild(content);


var button = document.getElementById("button") 
button.addEventListener("click", () => {
  var contenedor = document.getElementsByClassName("personal")[0]
  contenedor.classList.toggle("personal--dark")
});


