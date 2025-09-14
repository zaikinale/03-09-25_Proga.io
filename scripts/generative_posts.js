import postsFixture from './postsFixture.js'

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
            <button>
                <img src="../images/icons/Like.svg" alt="">
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
    <button class="view_comments">view all <span class="quantity"> ${i.comments} </span> comments</button>
    <div class="send_user_comment">
        <img src="../images/rectangle/unsplash_Ve7xjKImd28.jpg" alt="" class="profile_img"> 
        <textarea name="your_comment" id="" placeholder="Your comment"></textarea>
        <button>Send</button>
    </div>
</div>`
}