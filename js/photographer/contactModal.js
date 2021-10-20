let isOpen = false;

export const modalTemplate = () => {
  return `
      <p>Contactez-moi</p>
  
  `;
};

export const displayModal = () => {
  const form = document.querySelector(".modal-body");
  form.innerHTML = modalTemplate();
  form.style.display = isOpen ? "flex" : "none";
};

const checkValidity = () => {
  // check is from is valid
  // return true or false
};

export const toggle = () => {
  isOpen = !isOpen;
  displayModal();
  // isOpen === true assign on submit button call checkValidity
  // get return value from checkValidity do whatever is asked (show an alart or errors etc)
};
