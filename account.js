let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "signin.html"; 
}

document.getElementById("acc-name").textContent = user.name;
document.getElementById("acc-email").textContent = user.email;

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "signin.html";
});
