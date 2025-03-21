const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Об'єкт для збереження даних форми
let formData = { email: "", message: "" };

// Перевірка локального сховища при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
    }
});

// Відстеження введення даних та їх збереження у локальне сховище
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка події відправлення форми
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log("Submitted data:", formData);

    // Очищення форми, локального сховища та об'єкта formData
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});
