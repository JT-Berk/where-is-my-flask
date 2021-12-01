const loginForm = document.getElementById("loginForm");
const loginSubmit = document.getElementById("loginSubmit");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

handleForm = (event) => {
  event.preventDefault();
};

loginSubmit.onclick = () => {
  console.log("submit button clicked");
};

// loginForm.addEventListener("submit", handleForm);

loginForm.onsubmit = () => {
  // come to find out that this is not best practice and there are safer ways to handle logins
  $.ajax({
    type: "GET",
    url: "/login",
    data: {
      email: loginEmail.value,
      password: loginPassword.value,
    },
    success: (data) => {
      console.log("success");
      // console.log(data);
    },
    error: (error) => {
      console.log("success");
      // console.log(error);
    },
  });

  // make an ajax call with route to flask
  // route will check if user exists

  // if not we will prevent default behavior
};
