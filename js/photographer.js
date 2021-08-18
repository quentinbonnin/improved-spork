const photographersPagesTemplate = (photographer) => {
  return `
    <div>
    <div class="photographer-infos">
        <h1>${photographer.name}</h1>
        <h2>${photographer.city},${photographer.country}</h2>
        <p>${photographer.tagline}</p>
        <p>${photographer.tags
          .map((tag) => `<button class="tag">#${tag}</button>`)
          .join(" ")}</p>
    </div>
        
        <button>Contactez-moi</button>
        <img class="photographer__img__page" src="/Home-img/${
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
