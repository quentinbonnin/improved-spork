const photographersPagesTemplate = (photographer) => {
  return `
    <div class="block-photographer">
    <div class="photographer-infos">
        <h1 class="photographer__name photographer__name-page">${
          photographer.name
        }</h1>
        <h2 class="photographer__city">${photographer.city},${
    photographer.country
  }</h2>
        <p class="photographer__tagline">${photographer.tagline}</p>
        <p>${photographer.tags
          .map((tag) => `<button class="tag">#${tag}</button>`)
          .join(" ")}</p>
    </div>
        
        <button class="photographer__contact">Contactez-moi</button>
        <img class="photographer__img photographer__img-page" src="/Home-img/${
          photographer.portrait
        }" alt="${photographer.name}">
    </div>
    `;
};

const displayPhotographerPage = (photographers) => {
  const photographerPagesElement = document.querySelector("#photographer-page");

  photographerPagesElement.innerHTML = photographers
    .map(photographersPagesTemplate)
    .join("");
};

const getPhotographers = async () => {
  const response = await fetch("../FishEyeData.json");

  return (await response.json()).photographers;
};

(async () => {
  const photographers = await getPhotographers();

  displayPhotographerPage(photographers);
})();

const id = window.location.search.split("id=")[1];
