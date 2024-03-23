const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameErr = document.getElementById("nameErr");
const lastNameErr = document.getElementById("lastNameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const form = document.querySelector("form");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  getErrors(e);
});

function getErrors(e) {
  // use preventDefault for dont refresh site
  e.preventDefault();

  // if logics to see errors

  // for firstName
  const firstNameRegex = /^[A-Za-z]+(?:['\-][A-Za-z]+)?$/;

  if (!firstNameRegex.test(firstName.value)) {
    firstName.classList.add("actErrors");
    firstName.classList.remove("actGreenLine");
    nameErr.innerHTML = "First Name cannot be empty";
  } else if (firstName.value !== "") {
    firstName.classList.add("actGreenLine");
    firstName.classList.remove("actErrors");
    nameErr.innerHTML = "";
  }

  // for LastName
  const lastNameRegex =
    /^[A-Za-z]+(?:['\-][A-Za-z]+)?(?:\s+[A-Za-z]+(?:['\-][A-Za-z]+)?)?$/;

  if (!lastNameRegex.test(lastName.value)) {
    lastName.classList.add("actErrors");
    lastName.classList.remove("actGreenLine");
    lastNameErr.innerHTML = "Last Name cannot be empty";
  } else if (lastName.value !== "") {
    lastName.classList.add("actGreenLine");
    lastName.classList.remove("actErrors");
    lastNameErr.innerHTML = "";
  }

  // for Email
  const emailRegex =
    /^[\w-]+(?:\.[\w-]+)*@([a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email.value)) {
    email.classList.add("actErrors");
    email.classList.remove("actGreenLine");
    emailErr.innerHTML = "Looks like this is not an Email";
  } else if (email.value !== "") {
    email.classList.add("actGreenLine");
    email.classList.remove("actErrors");
    emailErr.innerHTML = "";
  }

  // for password

  if (password.value === "") {
    password.classList.add("actErrors");
    password.classList.remove("actGreenLine");
    passErr.innerHTML = "Password cannot be empty";
  } else if (password.value !== "") {
    password.classList.add("actGreenLine");
    password.classList.remove("actErrors");
    passErr.innerHTML = "";
  }
}
