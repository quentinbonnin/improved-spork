let isOpen = false;

export const modalTemplate = (name) => {
  return `
  <div>
    <p class="contact-photographer">Contactez-moi ${name}</p>
    <i class="fas fa-times contact-cross"></i>
  </div>
    
    <form
      class="modal"
      name="reserve"
      action="index.html"
      method="get"
      onsubmit="return checkValidity();"
      >
     
    </form>
    <div
      class="formData">
      <label>Prénom</label><br>
       <input
         class="text-control"
         type="text"
         id="first"
         name="first"
         /><br>
        <span id="Errorfirstname">Veuillez entrer 2 caractères ou plus pour le champ du Prénom.</span>
   </div>
   <div class="formData">
      <label>Nom</label><br>
      <input
        class="text-control"
        type="text"
        id="last"
        name="last"
        /><br>
        <span id="Errorlastname">Veuillez entrer 2 caractères ou plus pour le champ du Nom.</span>
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
        <span id="error-mail">Vous devez entrer une adresse mail valide.</span>
  </div>
  <input
      class="btn-submit"
      type="submit"
      class="button"
      value="Envoyer"
    />
    
  `;
};

export const displayModal = (photographers) => {
  const form = document.querySelector(".modal-body");
  form.innerHTML = [photographers].map(modalTemplate).join("");
  form.style.display = isOpen ? "flex" : "none";
  const crossModal = document.querySelector(".contact-cross");
  crossModal.addEventListener("click", () => {
    form.style.display = "none";
  });
};

export const checkValidity = (e) => {
  // console.log("super la vie de checkvalidity");
  // console.log(e);
  // // check is from is valid
  // // return true or false
  // let isValid = true;
  // const firstName = document.getElementById("first").value;
  // const lastName = document.getElementById("last").value;
  // const email = document.getElementById("email").value;
  // const errorfirstname = document.getElementById("Errorfirstname");
  // const submitDefault = document.querySelector(".btn-submit");
  // submitDefault.addEventListener("click", (e) => {
  //   e.preventDefault();
  // });
  // if ((firstName = "" || firstName.length < 2)) {
  //   displayErrors(errorfirstname);
  //   isValid;
  // } else {
  //   hideErrors(errorfirstname);
  // }
  // if ((lastName = "" || lastName.length < 2)) {
  //   displayErrors();
  //   isValid = false;
  // } else {
  //   hideErrors();
  // }
  // if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(email) == false) {
  //   displayErrors();
  //   isValid = false;
  // } else {
  //   hideErrors();
  // }
  // console.log("super");
  // // return isValid;
  // return false;
};

export const displayErrors = (element) => {
  element.style.display = "block";
  element.style.color = "red";
  element.style.fontSize = "1rem";
};

export const hideErrors = (element) => {
  element.style.display = "none";
};

export const toggle = () => {
  isOpen = !isOpen;
  displayModal();

  // isOpen === true assign on submit button call checkValidity
  // get return value from checkValidity do whatever is asked (show an alart or errors etc)
};
