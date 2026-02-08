   document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Clear previous messages
  errorMsg.textContent = "";

  // Basic email format validation using regex
  const emailRegex = /^[^\s@]+@gmail\.com$/;
  if (password.length < 6) {
  errorMsg.textContent = "Password must be at least 6 characters.";
  return;
}
  if (!email || !password) {
    errorMsg.textContent = "Please enter both email and password.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }
  alert("Login Successful for " + email + "!");
    errorMsg.textContent = "";
    window.location.href = "home.html"; 
});