import * as photographers from "****.json";

const displayPhotographers = (photographers) => {
  const photographersElement = document.querySelector("#photographers");

  photographersElement.innerHTML = photographers
    .map(
      (photographer) => `
      <div class="photographers__photographer">
        <a class="photographers__photographer__link" href="/pages/photographer?id=${photographer.id}">
            <img class="photographers__photographer__img"src="${photographer.imageURL}" alt="${photographer.name}">
            <h2 class="photographers__photographer__name">${photographer.name}</h2>
        </a>
        <h3 class="photographers__photographer__localisation">${photographer.localisation}</h3>
        <p class="photographers__photographer__description">${photographer.description}</p>
        <p class="photographers__photographer__price">${photographer.pricing}</p>
    </div>`
    )
    .join("");
};
