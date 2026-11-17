const form = document.getElementById("register-form");
const message = document.querySelector(".message");

const validateForm = (event) => {
    event.preventDefault();

    const nameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/; 
    const variantRegex = /^\d{1,2}$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const falcRegex = /^[А-ЯІЇЄҐ]{4}$/;                  
    const addressRegex = /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ'-]+$/;

    const inputs = [
        { el: form.elements.name, regex: nameRegex },
        { el: form.elements.phone, regex: phoneRegex },
        { el: form.elements.falc, regex: falcRegex },
        { el: form.elements.address, regex: addressRegex },
        { el: form.elements.variant, regex: variantRegex }
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