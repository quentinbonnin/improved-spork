export const modalTemplate = (name) => {
  return `
  <div>
    <p class="contact-photographer">Contactez-moi ${name}</p>
    
    <i class="fas fa-times contact-cross"></i>
  </div>
    
    <form
      class="modal"
      name="reserve"
      method="get"
      >
    <div
      class="formData">
      <label>Prénom</label><br>
       <input
         class="text-control"
         type="text"
         id="first"
         name="first"
         /><br>
        <span id="errorfirstname">Veuillez entrer 2 caractères ou plus pour le champ du Prénom.</span>
   </div>
   <div class="formData">
      <label>Nom</label><br>
      <input
        class="text-control"
        type="text"
        id="last"
        name="last"
        /><br>
        <span id="errorlastname">Veuillez entrer 2 caractères ou plus pour le champ du Nom.</span>
  </div>
  <div class="formData">
      <label>E-mail</label><br>
      <input
        class="text-control"
        type="email"
        id="email"
        name="email"
        /><br>
       <span id="error-mail">Vous devez entrer une adresse mail valide.</span>
  </div>
  <div class="formData">
       <label>Votre Message</label><br>
       <input
         class="text-control"
         type="text"
         id="message"
         name="message"
        /><br>
  </div>
  <button
  class ="btn-submit"
  type="submit"
  >Envoyer</button>
 
  </form>`;
};

let isOpen = false;

export const displayModal = ({ name }) => {
  const form = document.querySelector(".modal-body");
  form.innerHTML = modalTemplate(name);
  form.onsubmit = checkValidity;
  form.style.display = isOpen ? "flex" : "none";

  const crossModal = document.querySelector(".contact-cross");

  crossModal.addEventListener("click", () => {
    form.style.display = "none";
  });
};

export const displayErrors = (element) => {
  element.style.display = "block";
  element.style.color = "red";
  element.style.fontSize = "1rem";
};

export const hideError = (element) => {
  element.style.display = "none";
};

export const checkValidity = () => {
  console.log("checkValidity");

  let isValid = true;
  let submitDefault = document.querySelector("form");
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let errorfirstname = document.getElementById("errorfirstname");
  let errorLastName = document.getElementById("errorlastname");
  let errorEmail = document.getElementById("error-mail");

  // submitDefault.addEventListener("click", function (event) {
  //   event.preventDefault();
  // });

  if ((firstName = "" || firstName.length < 2)) {
    displayErrors(errorfirstname);
    isValid;
  } else {
    hideError(errorfirstname);
  }
  if ((lastName = "" || lastName.length < 2)) {
    displayErrors(errorLastName);
    isValid;
  } else {
    hideError(errorLastName);
  }
  if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(email) == false) {
    displayErrors(errorEmail);
    isValid;
  } else {
    hideError(errorEmail);
  }

  return (isValid === false) === alert("merci");
};

export const toggle = () => {
  isOpen = !isOpen;

  const form = document.querySelector(".modal-body");
  form.style.display = isOpen ? "flex" : "none";
};
