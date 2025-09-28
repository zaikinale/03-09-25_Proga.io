// scripts/comments_script.js

export function openCommentsModal(comments) {
  const commentsModal = document.getElementById('commentsModal');
  const commentsList = document.getElementById('commentsList');

  if (!commentsModal || !commentsList) {
    console.error('Модальное окно комментариев не найдено');
    return;
  }

  commentsList.innerHTML = '';

  if (!comments || comments.length === 0) {
    commentsList.innerHTML = '<p>Нет комментариев.</p>';
  } else {
    comments.forEach(comment => {
      const el = document.createElement('div');
      el.className = 'comment-item';
      el.innerHTML = `
                <img src="${'../images/rectangle/default_avatar.png'}" alt="${comment.author}">
                <div class="comment-content">
                    <div class="comment-author">${comment.author}</div>
                    <div class="comment-text">${comment.text}</div>
                </div>
            `;
      commentsList.appendChild(el);
    });
  }

  commentsModal.style.display = 'flex';
  setTimeout(() => commentsModal.classList.add('show'), 10);
}

export function initCommentsModal() {
  const closeBtn = document.getElementById('closeCommentsModal');
  const modal = document.getElementById('commentsModal');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    });
  }

  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    });
  }
}