const inputEmail = document.getElementById("submit-email");
const errorAlert = document.getElementById("error-email");

const CheckValidateEmail = (inputEmail) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value === mailformat) {
    alert("Valid email address!");
    return true;
  } else if (inputEmail.value !== "@") {
    errorAlert.innerHTML = "Oops! Please check your email";
    return false;
  }
};

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", CheckValidateEmail);
