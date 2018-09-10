const data = [
    {
        name: 'Memory Card game',
        src: 'images/matchinggame.jpg',
        info: 'In this project I created a single-page web app that allows users play memory card game',
        link: 'https://bhaskarsingh.github.io/memory-game/',
        responsive: true
    },
    {
        name: 'Animal Trading card project',
        src: 'images/fox/fox@medium.jpg',
        info: 'In this project I Re-created the mock-design card with my own customization.',
        link: 'https://codepen.io/BhaskarSingh/pen/EQLEEj?editors=0110'
    },
    {
        name: 'Arcade Game',
        src: 'images/arcade-game.jpg',
        info: "It's a classic arcade game, It's not responsive on smaller screen devices,so adviced not to run on it",
        link: 'https://bhaskarsingh.github.io/arcade-game/'
    },
    {
        name: 'Pixel Art project',
        src: 'images/pixel-art-project/pixel-art-project@medium.jpg',
        info: 'In this project I created a single-page web app that allows users to draw pixel art on a customizable canvas',
        link: 'https://codepen.io/BhaskarSingh/pen/XEKWmy?editors=0010'

    },
    {
        name: 'Resturant Review App',
        src: 'images/resturant-review.jpg',
        info: 'It shows list of resturants with respective location on the map, To run this application you have to setup & run local server',
        link: 'https://github.com/bhaskarSingh/Restaurant-Reviews-Stage-1'
    }

];

const cards = data.map( (item) => {
    return(
        `<div class="card">
        <div class="card-image">
            <picture>
            <img src="${item.src}" alt="${item.name}">
            </picture>
        </div>
        <div class="card-content">
            <span class="card-title">${item.name}</span>
            <p>${item.info}</p>
        </div>
        <div class="card-action">
            <a href="${item.link}" target="_blank"><i class="material-icons">code</i>${item.name}</a>
        </div>
        </div>`
    );
});

$('#projects-card').prepend(cards);
