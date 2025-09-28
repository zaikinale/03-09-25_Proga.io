import storyFixture from '../fixtures/storyFixture.js'

const activeStoryes = '#FACC05'
const viewedStoryes = '#8A8A8A'


const storiesContainer = document.querySelector('.view_stories');

for (const i of storyFixture) {
    storiesContainer.innerHTML +=`
    <div class="stories_block">
        <img src="${i.image}" alt="" class="story">
        <p>${i.name}</p>
    </div>`
}

// Сделать следующую логику: 
// после того как человек посмотрел сториес
// добавлять в массив особое свойство 
// означающее просмотренное сториес после клика

// Сделать отдельную функцию по генерации story с передачей массива истоиий и контейнера для историй

// const generateStories = (arr, container) => {
//     for (const i of arr) {
//         container.innerHTML +=`
//         <div class="stories_block">
//             <img src="${i.image}" alt="" class="story">
//             <p>${i.name}</p>
//         </div>`
//     }
// }

// export { generateStories };











