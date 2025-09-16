import personsArr from "./personsFixture"; './personsFixture'

const users = [
    { username: "user1", password: "pass123" },
    { username: "admin", password: "admin123" },
    { username: "test@example.com", password: "test456" },
    { username: "+1234567890", password: "phone789" }
];

const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('errorMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const user = users.find(u => 
        u.username.toLowerCase() === username.toLowerCase() && 
        u.password === password
    );

    if (user) {
        window.location.href = "main.html";
    } else {
        errorDiv.textContent = "Incorrect username or password.";
        errorDiv.style.color = "red";
        errorDiv.style.marginTop = "10px";
    }
});

// Добавить функционал входа исходя из базы фикстур профилей 
// далее по принципу id пользователя выдавать профиль пользователя и главную ленту



