// scripts/generative_posts.js

import postsFixture from '../fixtures/postsFixture.js';
import { openCommentsModal, initCommentsModal } from './comments_script.js';

// Инициализация модального окна комментариев
document.addEventListener('DOMContentLoaded', () => {
    initCommentsModal();
});

const main = document.querySelector('main');

// Генерация постов
for (let i of postsFixture) {
    main.innerHTML += `
<div data-post-id="${i.id}" class="post_block">
    <div class="title_block hover-button">
        <div class="profile">
            <img src="${i.img_profile}" alt="" class="profile_img">
            <h4>${i.name}</h4>
        </div>
        <button>
            <img src="../images/icons/Group.svg" alt="">
        </button>
    </div>
    <img src="${i.img_post}" alt="">
    <div class="actions hover-button">
        <div class="action_buttons hover-button">
            <button class="like_button toggle" data-liked="false">
                <img src="../images/icons/like_off.svg" alt="">
            </button>
            <button class="view-comments-icon" data-post-id="${i.id}">
                <img src="../images/icons/comment.svg" alt="">
            </button>
            <button>
                <img src="../images/icons/send.svg" alt="">
            </button>
        </div>
        <button>
            <img src="../images/icons/bookmark.svg" alt="">
        </button>
    </div>
    <div class="likes">
        Liked by <span class="fiend">Pupa</span> and <span class="quantity">${i.likes} others</span>
    </div>
    <div class="description">
        <span class="">${i.name}</span>
        ${i.description}
    </div>
    <button class="view_comments" data-post-id="${i.id}">
        view all&nbsp;<span class="quantity">${i.comments}</span>&nbsp;comments
    </button>
    <div class="send_user_comment hover-button">
        <img src="../images/rectangle/unsplash_Ve7xjKImd28.jpg" alt="" class="profile_img"> 
        <textarea name="your_comment" placeholder="Your comment"></textarea>
        <button>Send</button>
    </div>
</div>`;
}

// После рендеринга
setTimeout(() => {
    // Авто-рост textarea (если нужно)
    const textareas = document.querySelectorAll('textarea[placeholder="Your comment"]');
    textareas.forEach(ta => {
        const adjustHeight = () => {
            ta.style.height = 'auto';
            ta.style.height = (ta.scrollHeight + 2) + 'px';
        };
        ta.addEventListener('input', adjustHeight);
        adjustHeight(); // при загрузке
    });

    // Обработчики для комментариев
    document.querySelectorAll('.view_comments, .view-comments-icon').forEach(btn => {
        btn.addEventListener('click', function () {
            const postId = this.dataset.postId;
            const post = postsFixture.find(p => p.id == postId);
            openCommentsModal(post?.commentList || []);
        });
    });

    // Обработчики лайков (минимальная версия)
    document.querySelectorAll('.like_button').forEach(btn => {
        btn.addEventListener('click', function () {
            const isLiked = this.dataset.liked === 'true';
            const newLiked = !isLiked;
            this.dataset.liked = newLiked;
            const img = this.querySelector('img');
            img.src = newLiked
                ? '../images/icons/like_on.svg'
                : '../images/icons/like_off.svg';
            console.log('Лайк:', { postId: this.closest('.post_block').dataset.postId, liked: newLiked });
        });
    });
}, 0);