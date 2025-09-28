// main.js (или в самом конце body)
import { initCommentsModal } from './comments_script';

document.addEventListener('DOMContentLoaded', () => {
  initCommentsModal(); // ← регистрирует обработчики закрытия
});