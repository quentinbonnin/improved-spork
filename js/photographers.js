
function grabDataFromJSON(){
  fetch("")
   .then(response => response.json())
   .then (dataJson => console.log(dataJson))
}
grabDataFromJSON();



const displayPhotographers = (photographer) => {
  const photographersElement = document.querySelector("#photographers");

  photographersElement.innerHTML = photographer
    .map(
      (photographer) => `
      <div class="photographers__photographer">
        <a class="photographers__photographer__link" href="/pages/photographer?id=${photographers.id}">
            <img class="photographers__photographer__img"src="${photographers.portrait}" alt="${photographers.name}">
            <h2 class="photographers__photographer__name">${photographers.name}</h2>
        </a>
        <h3 class="photographers__photographer__localisation">${photographers.localisation}</h3>
        <p class="photographers__photographer__description">${photographers.description}</p>
        <p class="photographers__photographer__price">${photographers.pricing}</p>
    </div>`
    )
    .join("");
};
displayPhotographers();