//your JS code here. If required.
window.onload = function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkboxInput = document.getElementById("checkbox");
  const submitButton = document.getElementById("submit");
  const existingUserButton = document.getElementById("existing");

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  // Show existing user button if data is stored
  if (savedUser && savedPass) {
    existingUserButton.style.display = "block";
  }

  // Login as existing user
  existingUserButton.addEventListener("click", function () {
    alert(`Logged in as ${savedUser}`);
  });

  // Submit button behavior
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkboxInput.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Reload page to reflect localStorage changes
    location.reload();
  });
};
