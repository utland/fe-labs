const form = document.getElementById("register-form");
const message = document.querySelector(".message");

const validateForm = (event) => {
    event.preventDefault();

    const nameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/; 
    const groupRegex = /^[А-ЯІЇЄҐ]{2}\-\d{2}$/;
    const cardRegex = /^[A-Z]{2}\s\N\d{6}$/;
    const birthdayRegex = /^\d{2}\.\d{2}\.\d{4}$/;                  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    const inputs = [
        { el: form.elements.name, regex: nameRegex },
        { el: form.elements.group, regex: groupRegex },
        { el: form.elements.card, regex: cardRegex },
        { el: form.elements.birthday, regex: birthdayRegex },
        { el: form.elements.email, regex: emailRegex }
    ];

    let isValid = true;
    for (const { el, regex } of inputs) {
        const value = el.value.trim();
        if (value && regex.test(value)) {
            el.classList.remove("input-error");
        } else {
            el.classList.add("input-error");
            isValid = false;
        }
    }
  
    if (isValid) {
        for (const { el, label } of inputs) {
            const targetP = message.querySelector(`#${el.name}`);
            targetP.textContent = `${el.value.trim()}`;
        }
        
        message.style.display = "block"; 
    }
}

form.addEventListener("submit", validateForm);