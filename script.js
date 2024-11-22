// script.js

// Статичные данные для входа
const validUsername = "admin";
const validPassword = "12345";

document.addEventListener("DOMContentLoaded", () => {
    // Элементы навигации
    const personalCabinetLink = document.getElementById("personal-cabinet");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");
    const logoutLink = document.getElementById("logout-link");

    // Проверяем состояние входа при загрузке страницы
    if (localStorage.getItem("isLoggedIn") === "true") {
        loginLink.style.display = "none";
        registerLink.style.display = "none";
        personalCabinetLink.style.display = "inline";
        logoutLink.style.display = "inline";
    }

    // Обработчик формы входа (только на странице login.html)
    const form = document.querySelector(".log");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;

            if (username === validUsername && password === validPassword) {
                alert("Вход выполнен успешно!");

                // Сохраняем состояние входа
                localStorage.setItem("isLoggedIn", "true");

                // Обновляем видимость элементов навигации
                loginLink.style.display = "none";
                registerLink.style.display = "none";
                personalCabinetLink.style.display = "inline";
                logoutLink.style.display = "inline";

                // Перенаправляем на личный кабинет
                window.location.href = "personal_cabinet.html";
            } else {
                alert("Неверное имя пользователя или пароль!");
            }
        });
    }

    // Обработчик для выхода из аккаунта
    if (logoutLink) {
        logoutLink.addEventListener("click", (event) => {
            event.preventDefault();

            // Удаляем состояние входа
            localStorage.removeItem("isLoggedIn");

            // Сбрасываем видимость ссылок
            loginLink.style.display = "inline";
            registerLink.style.display = "inline";
            personalCabinetLink.style.display = "none";
            logoutLink.style.display = "none";

            alert("Вы вышли из аккаунта.");
        });
    }
});
