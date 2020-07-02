const cards = document.getElementById('cards');
const search = document.getElementById('search')

const socialMedia =  [
      {       
        name: "Github",
        icon: "fa-github-alt",
        link: "https://github.com/MarianaLoaiza"
      },
      {
        name: "Facebook",
        icon: "fa-facebook",
        link: "https://es-la.facebook.com/"
      },
      {
        name: "Instagram",
        icon: "fa-instagram",
        link: "https://www.instagram.com/?hl=es-la"
      },
    ]
  
    // agregar red social a la card
  const social = (card) =>{
    const list = document.createElement('ul');
    list.classList.add('list');
    
    socialMedia.map( date => {
    const item = document.createElement('li');
    item.classList.add('item')
       
    const link = document.createElement('a');
    link.href = date.link;
    link.target = 'blanck';
    link.classList.add('link');
  
    const icon = document.createElement('i'); 
    icon.classList.add(date.icon);
    icon.classList.add("fa");
    icon.classList.add("fa-2x");
    console.log(icon)
   
    list.appendChild(item);
    item.appendChild(link);
    link.appendChild(icon);
    
    card.appendChild(list);
    } );
  }
    
  // cambiar de color a la card 
  const background = (divRigth, card) => {
    const button = document.createElement('button');
    button.innerText = 'Color'
    button.classList.add('button');
  
    divRigth.appendChild(button);
  
    button.addEventListener('click', () => {
    card.classList.toggle('card--violet');
     
    });
  }
  
  // Escribir usuario de Github
  const searchUser = () =>{
    const searchUser = document.createElement('div');
    searchUser.classList.add('searchUser');

    const title = document.createElement('h1');
    title.classList.add('searchUser__title');
    title.innerText = 'Usuarios de Github.';

    const input = document.createElement('input');
    input.type = 'text'
    input.placeholder = 'Ingrese su usuario de Github';
    input.classList.add('input');

    const button = document.createElement('button');
    button.innerText = 'Search'
    button.classList.add('button');

    searchUser.appendChild(title);
    searchUser.appendChild(input);
    searchUser.appendChild(button);
    search.appendChild(searchUser)
    
    button.addEventListener('click',  () => {
      const github = input.value;
      console.log(github) 
       fetchData(input); 
    })  
  };
 
  // Buscar usuario de Github y pintar la data
  function fetchData(userGithub){
    fetch(`https://api.github.com/users/${userGithub.value}`)
    .then(function (response) { 
      return response.json()
    }).then(function (data) { 
      console.log(data);

      [data].map(user => {

      const card = document.createElement('div');
      card.classList.add('card')
            
      const divLeft = document.createElement('div');
      divLeft.classList.add('left')

      const imge = document.createElement('img');
      imge.src = user.avatar_url; 
      imge.classList.add('imge');

      const divRigth = document.createElement('div');
      divRigth.classList.add('rigth')

      const displayName = document.createElement('h1');
      displayName.classList.add('displayName');
      displayName.innerText = '@'+ user.login;

      const userName = document.createElement('h2');
      userName.classList.add('userName');
      userName.innerText = user.name;    
          
      divLeft.appendChild(imge);

      divRigth.appendChild(displayName);
      divRigth.appendChild(userName);

      card.appendChild(divLeft);
      card.appendChild(divRigth);
          
      cards.appendChild(card);
     
      social(divRigth);
      background(divRigth , card);
    }) 
        
    }).catch(error => {
        console.log(error);
  })
 
};
     
searchUser();

        
        
        
        
        
        
        