function saveDate() {
  localStorage.setItem(
    `user`,
    JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      teachDuration: document.querySelector("#teach-duration").value,
      teachLevel: document.querySelector("#teach-level").value,
    })
  );
}

function validInput(elementId) {
  !document.querySelector(elementId).value
    ? addErrorEffect(elementId)
    : removeErrorEffect(elementId);
  return document.querySelector(elementId).value;
}
