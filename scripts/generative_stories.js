const storiesArr = [
    {
        id: 1,
        name: 'rasist',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 2,
        name: 'wrwerwrw',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 3,
        name: 'erterytreyrt',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 4,
        name: 'rasretertist',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 5,
        name: 'sdfsdf',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 6,
        name: 'rasdfsdsist',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 7,
        name: 'sdfsdfs',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 8,
        name: 'fnklsdjf',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
    {
        id: 9,
        name: 'log',
        image: '../images/rectangle/unsplash_y2oAd10UfIU.jpg', 
    },
]


const storiesContainer = document.querySelector('.view_stories');

for (const i of storiesArr) {
    storiesContainer.innerHTML +=`
    <div class="stories_block">
        <img src="${i.image}" alt="" class="story">
        <p>${i.name}</p>
    </div>`
}




