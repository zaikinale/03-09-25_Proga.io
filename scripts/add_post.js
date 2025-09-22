// Массив для хранения постов
let posts = [];

// Авто-рост textarea
const captionTextarea = document.getElementById('caption');

if (captionTextarea) {
  captionTextarea.addEventListener('input', autoResizeTextarea);
}

function autoResizeTextarea() {
  this.style.height = 'auto'; // Сбрасываем высоту
  this.style.height = (this.scrollHeight) + 'px'; // Устанавливаем по контенту
}

// DOM элементы
const openModalBtn = document.querySelector('.actions_buttons button:first-child'); // Кнопка "+"
const closeModalBtn = document.getElementById('closeModalBtn');
const postModal = document.getElementById('postModal');
const postForm = document.getElementById('postForm');

// Открытие модалки
openModalBtn.addEventListener('click', () => {
  postModal.style.display = 'flex';
  setTimeout(() => postModal.classList.add('show'), 10); // анимация
});

// Закрытие модалки
closeModalBtn.addEventListener('click', () => {
  postModal.classList.remove('show');
  setTimeout(() => postModal.style.display = 'none', 300);
});

// Закрытие по клику вне формы
window.addEventListener('click', (e) => {
  if (e.target === postModal) {
    postModal.classList.remove('show');
    setTimeout(() => postModal.style.display = 'none', 300);
  }
});

// Обработка отправки формы
postForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const imageUrl = document.getElementById('imageUrl').value.trim();
  const caption = document.getElementById('caption').value.trim();
  const location = document.getElementById('location').value.trim();

  // Создаём объект поста
  const newPost = {
    id: Date.now(), // уникальный ID
    imageUrl,
    caption,
    location: location || null, // если пусто — null
    createdAt: new Date().toISOString()
  };

  // Добавляем в массив
  posts.push(newPost);

  // Логируем для проверки
  console.log('Новый пост добавлен:', newPost);
  console.log('Все посты:', posts);

  // Очищаем форму и закрываем модалку
  postForm.reset();
  postModal.classList.remove('show');
  setTimeout(() => postModal.style.display = 'none', 300);

  // Уведомление
  alert('Пост успешно опубликован!');
});