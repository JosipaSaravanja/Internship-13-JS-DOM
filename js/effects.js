function addInputEffects(elementId) {
  const element = document.querySelector(elementId);

  element.addEventListener("mouseover", () => {
    element.classList.add("hover");
  });

  element.addEventListener("mouseleave", () => {
    element.classList.remove("hover");
  });

  element.addEventListener("focus", () => {
    document.querySelector(`${elementId}-label`).classList.add("label-focus");
    element.classList.add("focus");
  });

  element.addEventListener("blur", () => {
    document
      .querySelector(`${elementId}-label`)
      .classList.remove("label-focus");
    element.classList.remove("focus");
  });
}

function addErrorEffect(elementId) {
  document.querySelector(elementId).classList.add("error");
  if (!document.querySelector(elementId).parentNode.querySelector(".errorMessage")) {//ako vec ne postoji
    document.querySelector(elementId).insertAdjacentHTML(
        "afterend",
        `<p class="errorMessage">The ${
          document.querySelector(elementId).placeholder
        } field must be requid</p>`
      );
  }
  document.querySelector(`${elementId}-label`).classList.add("error-focus");
}

function removeErrorEffect(elementId) {
  const element = document.querySelector(elementId);
  document.querySelector(`${elementId}-label`).classList.remove("error-focus");
  element.classList.remove("error");
  if (element.parentNode.querySelector(".errorMessage"))
    element.parentNode.querySelector(".errorMessage").remove();
}
