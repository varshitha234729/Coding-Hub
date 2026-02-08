document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  errorMsg.textContent = ""; // Clear previous error

  // Email format regex
  const emailRegex = /^[^\s@]+@gmail\.com$/;

  // Password strength regex: at least 6 characters
  const passwordRegex = /^.{6,}$/;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Invalid email format.";
    return;
  }

  if (!passwordRegex.test(password)) {
    errorMsg.textContent = "Password must be at least 6 characters long.";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  alert("Sign up successful!");
  window.location.href = "home.html";
});