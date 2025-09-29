import personsArr from '../fixtures/personsFixture.js'

const id = 1

// Получается сначала ищем id профиля в массиве фикстур,
//  после в его html doc добавляем информацию из фикстур 
// после генерируем его ленту

const findUserOfId = (id, arr) => arr.find(user => user.id === id);

const container = document.querySelector('.content')

const generateLentaPosts = (posts, container) => {
    for (const i of posts) {
        container.innerHTML +=`
            <div class="post">
                <img src="${i.img}" alt="">
            </div>
            `
    }
}
const user = findUserOfId(id, personsArr)


const generateStories = (arr, container) => {
    for (const i of arr) {
        container.innerHTML +=`
            <div class="stories_block">
                <img src="${i.img}" alt="" class="story">
                <p>${i.description}</p>
            </div>`
    }
}


if (user) {

    // Ставим логин
    const login = document.querySelector('.leave_profile h2');
    if (login) {
        login.textContent = user.login;
    }
    // Ставим аватарку
    const userImg = document.querySelector('.person img') 
    if (userImg) {
        userImg.src = user.avatar; // ← главное — правильно указать путь к изображению
    }
    // Ставим Количество подписок, постов и подписчиков
    const countPosts = document.querySelector('.posts_button h2');
    const countFollowers = document.querySelector('.followers_button h2');
    const countFollowing = document.querySelector('.following_button h2');
    const posts = user.posts

    if (countPosts) {
        countPosts.textContent = posts.length;
    }
    if (countFollowers) {
        countFollowers.textContent = user.subscribers;
    }
    if (countFollowing) {
        countFollowing.textContent = user.subscriptions;
    }

    const nameUser = document.querySelector('.description .name')    
    const infoUser = document.querySelector('.description .info')    
    const linksUser = document.querySelector('.description .links')    


    if (nameUser) {
        nameUser.textContent = user.name;
    }
    
    if (infoUser) {
        infoUser.textContent = user.description;
    }

    for (const i of user.links) {
        const url = new URL(i);
        const hostname = url.hostname;

        linksUser.innerHTML +=`
            <a class='link' href="${i}">${hostname}</a>
            `
    }

    const storiesContainer = document.querySelector('.view_stories')

    generateStories(user.stories ,storiesContainer)

    generateLentaPosts(posts, container)
}






