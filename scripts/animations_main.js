document.addEventListener('DOMContentLoaded', () => {
  const textareas = document.querySelectorAll('.send_user_comment textarea');

  textareas.forEach(textarea => {
    // Функция для подстройки высоты
    const autoResize = () => {
      // Сбрасываем высоту, чтобы измерить реальную высоту контента
      textarea.style.height = 'auto';
      // Устанавливаем новую высоту = scrollHeight (включая padding)
      const newHeight = Math.min(textarea.scrollHeight, 200); // 200 = max-height
      textarea.style.height = newHeight + 'px';
    };

    // Подписываемся на события ввода
    textarea.addEventListener('input', autoResize);

    // Опционально: подогнать высоту при загрузке (если есть placeholder или начальный текст)
    autoResize();
  });
});