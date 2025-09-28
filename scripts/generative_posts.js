import postsFixture from '../fixtures/postsFixture.js'

const main = document.querySelector('main');

for (let i of postsFixture) {
    main.innerHTML += `
<div class="post_block">
    <div class="title_block">
        <div class="profile">
            <img src="${i.img_profile}" alt="" class="profile_img">
            <h4>${i.name}</h4>
        </div>
        <button>
            <img src="../images/icons/Group.svg" alt="">
        </button>
    </div>
    <img src="${i.img_post}" alt="">
    <div class="actions">
        <div class="action_buttons">
            <button class='like_button toggle'>
                <img src="../images/icons/like_off.svg" alt="">
            </button>
            <button>
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
    <button class="view_comments">view all&nbsp;<span class="quantity">${i.comments}</span>&nbsp;comments</button>
    <div class="send_user_comment">
        <img src="../images/rectangle/unsplash_Ve7xjKImd28.jpg" alt="" class="profile_img"> 
        <textarea name="your_comment" placeholder="Your comment"></textarea>
        <button>Send</button>
    </div>
</div>`
}

// Ждём следующего "тика" (чтобы DOM обновился после innerHTML)
setTimeout(() => {
    const textareas = document.querySelectorAll('.comment-input');

    textareas.forEach(ta => {
        // Сбрасываем всё, что может мешать
        ta.style.height = 'auto';
        ta.style.overflow = 'hidden';

        // Устанавливаем высоту по контенту
        const newHeight = ta.scrollHeight + 2; // +2px запас
        ta.style.height = newHeight + 'px';

        // Вешаем обработчик
        ta.addEventListener('input', function() {
            this.style.height = 'auto'; // Сначала сбрасываем
            // Затем — с задержкой 0 — устанавливаем новую высоту
            setTimeout(() => {
                this.style.height = (this.scrollHeight + 2) + 'px';
            }, 0);
        });
    });
}, 0);

