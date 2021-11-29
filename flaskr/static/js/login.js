const loginForm = document.getElementById("loginForm");
const loginSubmit = document.getElementById("loginSubmit");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const errorText = document.getElementById("errorText");
// const fxn = () => {
//   console.log("form below");
//   console.log(loginForm);

//   console.log("button below");
//   console.log(loginSubmit);
// };

// loginForm.addEventListener("submit", (e) => {
//   let messages = [];

//   if (loginEmail.value === "" || loginEmail.value === null) {
//     messages.push("Email is required.");
//   }

//   if (loginPassword.value === "" || loginPassword.value === null) {
//     messages.push("Email is required.");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorText.innerText = messages.join(",");
//   }
// });

handleForm = (event) => {
  event.preventDefault();
};

loginSubmit.onclick = () => {
  console.log("submit button clicked");
};

loginForm.addEventListener("submit", handleForm);

loginForm.onsubmit = (data) => {
  console.log("formData below");
  console.log(loginEmail.value);
  console.log(loginPassword.value);
};
