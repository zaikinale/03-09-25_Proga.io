import { postLikes } from '../api/likes.js'

export function initLikeHandlers(onLikeCallback) {
  const likeButtons = document.querySelectorAll('.like_button');

  likeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const postBlock = this.closest('.post_block');
      const postId = postBlock.dataset.postId;

      // Получаем текущее состояние из data-атрибута
      const isLiked = this.dataset.liked === 'true';
      const newLikedState = !isLiked;

      // Обновляем data-атрибут
      this.dataset.liked = newLikedState;

      // Меняем иконку
      // const img = this.querySelector('img');
      // img.src = newLikedState
      //   ? '../images/icons/like_on.svg'
      //   : '../images/icons/like_off.svg';

      // Вызываем твой callback
      // onLikeCallback(postId, newLikedState);
    });
  });
}




