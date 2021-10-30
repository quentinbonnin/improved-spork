
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
      onsubmit="return checkValidity()"
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
 
  </form>
    
  `;
};
let isOpen = false;
export const displayModal = (photographers) => {
  const form = document.querySelector(".modal-body");
  form.innerHTML = [photographers].map(modalTemplate).join("");
  form.style.display = isOpen ? "flex" : "none";
  const crossModal = document.querySelector(".contact-cross");
  crossModal.addEventListener("click", () => {
    form.style.display = "none";
  });
  console.log(photographers.name)
};
// const submitDefault = document.querySelector(".modal");
// submitDefault.addEventListener('submit' , function(submitEvent) {
//   submitEvent.preventdefault();
//   submitEvent.addEventListener('submit' , checkValidity)
// })

export const displayErrors = (element) => {
  element.style.display = "block";
  element.style.color = "red";
  element.style.fontSize = "1rem";
};

 export const hideErrors = (element) => {
  element.style.display = "none";
};


export const checkValidity = () => {
   console.log("super la vie de checkvalidity");
  // console.log(e);
  // // check is from is valid
  // // return true or false
  let isValid = false;
  let submitDefault = document.querySelector('form');
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let errorfirstname = document.getElementById("errorfirstname");
  let errorLastName = document.getElementById("errorlastname")
  let errorEmail = document.getElementById("error-mail")
  
  
  
  submitDefault.addEventListener('click' , function(event) {
    event.preventDefault();
  })

  if ((firstName = "" || firstName.length < 2)) {
    isValid
    displayErrors(errorfirstname);
    
  } else {
    hideErrors(errorfirstname);
  }
  if ((lastName = "" || lastName.length < 2)) {
    isValid
    displayErrors(errorLastName);
    
  } else {
    hideErrors(errorLastName);
  }
  if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(email) == false) {
    isValid
     displayErrors(errorEmail);
   
  } else {
    hideErrors(errorEmail);
  }
    return isValid = true;
  
};



export const toggle = () => {
  isOpen = !isOpen;
  displayModal();
  let submit = document.querySelector('.btn-submit');
  submit.addEventListener('click' ,checkValidity)
  // isOpen === true assign on submit button call checkValidity
  // get return value from checkValidity do whatever is asked (show an alart or errors etc)
};
