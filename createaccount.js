document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailPhone = document.querySelectorAll("input[type='text']")[1];
    const pass = document.querySelectorAll("input[type='password']")[0];
    const confirmPass = document.querySelectorAll("input[type='password']")[1];

    form.addEventListener("submit", function (e) {
        const value = emailPhone.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!emailPattern.test(value) && !phonePattern.test(value)) {
            e.preventDefault();
            alert("Invalid Email or Phone Number");
            return;
        }

        if (pass.value !== confirmPass.value) {
            e.preventDefault();
            alert("Passwords do not match");
        }
    });
});
