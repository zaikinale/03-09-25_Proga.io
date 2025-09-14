import personsArr from './personsFixture.js'

const id = 1

// Получается сначала ищем id профиля в массиве фикстур,
//  после в его html doc добавляем информацию из фикстур 
// после генерируем его ленту

const findUserOfId = (id, arr) => arr.find(user => user.id === id);

const container = document.querySelector('.content')

const generateLentaPosts = (posts) => {
    for (const i of posts) {
        container.innerHTML(`
            <div class="post">
                <img src="${i.img}" alt="">
            </div>
            `)
    }
}
const user = findUserOfId(id, personsArr)

if (user) {

    // Ставим логин
    const login = document.querySelector('.leaveprofile h2');
    if (login) {
        login.textContent = user.nick;
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

        linksUser.innerHTML(`
            <a href="${i}">${hostname}</a>
            `)
    }

    





    generateLentaPosts(posts)
}






