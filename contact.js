document.addEventListener("DOMContentLoaded", function () {
  fetch("states.json")
    .then((response) => response.json())
    .then((data) => {
      const stateDropdown = document.getElementById("stateDropdown");
      const promoCodeField = document.getElementById("code");
      for (const stateCode in data) {
        if (data.hasOwnProperty(stateCode)) {
          const option = document.createElement("option");
          option.value = stateCode;
          option.text = data[stateCode];
          stateDropdown.appendChild(option);
        }
      }
      stateDropdown.addEventListener("change", function () {
        const selectedState = stateDropdown.value;
        if (selectedState) {
          promoCodeField.value = data[selectedState] + " - PROMO";
        } else {
          promoCodeField.value = "";
        }
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));

  const sendMessageButton = document.querySelector(".bottombuttons .Message");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const orgInput = document.getElementById("org");

  sendMessageButton.addEventListener("click", function (event) {
    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      orgInput.value.trim() === ""
    ) {
      // Display an error message for empty fields
      const errorElement = document.getElementById("nameError");
      if (nameInput.value.trim() === "") {
        errorElement.textContent = "Name is Required";
      } else {
        errorElement.textContent = "";
      }

      const errorElement1 = document.getElementById("emailError");
      if (emailInput.value.trim() === "") {
        errorElement1.textContent = "Email is Required";
      } else {
        errorElement1.textContent = "";
      }

      const errorElement2 = document.getElementById("orgError");
      if (orgInput.value.trim() === "") {
        errorElement2.textContent = "Org Name is Required";
      } else {
        errorElement2.textContent = "";
      }

      // Prevent the form from submitting
      event.preventDefault();
    } else {
      // Clear the error messages
      const errorElement = document.getElementById("nameError");
      errorElement.textContent = "";

      const errorElement1 = document.getElementById("emailError");
      errorElement1.textContent = "";

      const errorElement2 = document.getElementById("orgError");
      errorElement2.textContent = "";
    }
  });
});

const maleRadio = document.getElementById("gender-male");
const femaleRadio = document.getElementById("gender-female");
maleRadio.addEventListener("change", function () {
  if (maleRadio.checked) {
    alert("Hello Sir");
  }
});
femaleRadio.addEventListener("change", function () {
  if (femaleRadio.checked) {
    alert("Hello Lady");
  }
});
function Validate() {
  var mail = document.getElementById("email").value;
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (mail === "") {
    return true;
  } else if (regx.test(mail)) {
    return true;
  } else {
    alert("Email is not valid");
    return false;
  }
}
