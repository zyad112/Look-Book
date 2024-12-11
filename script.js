document.getElementById("toggle-dark-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate login process
  console.log(`Email: ${email}, Password: ${password}`);
  alert("Logged in successfully!");
});

document.getElementById("language-switcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  fetch(`locales/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      document.getElementById("welcome").textContent = translations.welcome;
      document.getElementById("login-btn").textContent = translations.login;
    });
});
