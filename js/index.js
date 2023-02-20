const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const teachLevel = document.querySelector("#teach-level");
const teachDuration = document.querySelector("#teach-duration");
const button = document.querySelector("#submit");
const user = JSON.parse(localStorage.getItem("user"));


if (user) {
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  teachLevel.value=user.teachLevel;
  teachDuration.value=user.teachDuration;
} else {
  firstName.value = "";
  lastName.value = "";
  teachLevel.value = teachLevel.options[0].value;
  teachDuration.value = teachDuration.options[0].value;
}

addInputEffects("#first-name");
addInputEffects("#last-name");

addSelectEffects("#teach-level")
addSelectEffects("#teach-duration")

button.addEventListener("click", () => {
  if (validInput("#first-name") && validInput("#last-name")) {
    saveDate();
    alert(`Uspješno spremljeni podaci`);
  }
});

