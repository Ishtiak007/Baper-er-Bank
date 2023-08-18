document.getElementById("btnSubmit").addEventListener("click", function () {
  const inputField = document.getElementById("inputField");
  const emailValue = inputField.value;
  //   console.log(emailValue);
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  //console.log(password);
  if (emailValue === "ishtiak@gamil.com" && password === "erin") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
