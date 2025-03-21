const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";


let formData = { email: "", message: "" };


document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
    }
});


form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log("Submitted data:", formData);

    
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});
