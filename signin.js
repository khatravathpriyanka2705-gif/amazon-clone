document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelector("input[type='text']");
    
    form.addEventListener("submit", function (e) {
        const value = input.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;
        
        if (!emailPattern.test(value) && !phonePattern.test(value)) {
            e.preventDefault();
            alert("Invalid Email or Phone Number");
        }
    });
});
