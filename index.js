const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const teachLevel = document.querySelector("#teach-level");
const teachDuration = document.querySelector("#teach-duration");
const button = document.querySelector("#submit");
const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  teachLevel.value = user.teachLevel;
  teachDuration.value = user.teachDuration;
}else{
  firstName.value = "";
  lastName.value = "";
  teachLevel.value = teachLevel.options[0].value;
  teachDuration.value = teachDuration.options[0].value;
}
addInputEffects("#first-name");
addInputEffects("#last-name");
teachDuration.options[teachDuration.selectedIndex].style = `color: #1360a0;font-weight: bold;`;

function setData(target, value) {
    document.querySelector(target).value = value;
  }
  
button.addEventListener("click", (e) => {
    e.preventDefault()
    if(validInput("#first-name") && validInput("#last-name")){
        saveDate()
        alert(`Uspješno spremljeni podaci`)
    }
});





function saveDate(){
    localStorage.setItem(`user`, JSON.stringify(
        {
            firstName: document.querySelector('#first-name').value,
            lastName: document.querySelector('#last-name').value,
            teachDuration: document.querySelector('#teach-duration').value,
            teachLevel: document.querySelector('#teach-level').value,
          }
    ))
}

function validInput(elementId){
        !document.querySelector(elementId).value?addErrorEffect(elementId):removeErrorEffect(elementId);
    return document.querySelector(elementId).value;
}

function addErrorEffect(elementId){
    document.querySelector(elementId).classList.add('error') //ako vec postoji nemoj dodavat
    if(!document.querySelector(elementId).parentNode.querySelector('.errorMessage')) {
        document.querySelector(elementId).insertAdjacentHTML("afterend", 
        `<p class="errorMessage">The ${document.querySelector(elementId).placeholder} field must be requid</p>`);
    }
}

function removeErrorEffect(elementId){
    const element=document.querySelector(elementId);
    if(element.nextSibling) element.nextSibling.remove();
    element.classList.remove('error')
}


function addInputEffects(elementId) {
    const element=document.querySelector(elementId);
    element.addEventListener("mouseover", () => {
      element.classList.add('hover')
    });

    element.addEventListener("mouseleave", () => {
      element.classList.remove('hover')
    });

    element.addEventListener("focus", ()=>{
    document.querySelector(`${elementId}-label`).classList.add('label-focus');
    element.classList.add('focus')
  });
  
    element.addEventListener("blur", () => {
      document.querySelector(`${elementId}-label`).classList.remove('label-focus');
      element.classList.remove('focus')

    });
  }
