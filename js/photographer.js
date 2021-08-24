const photographerTemplate = (photographer) => {
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

const displayPhotographer = (photographer) => {
  const photographerPagesElement = document.querySelector("#photographer-page");

  photographerPagesElement.innerHTML = photographerTemplate(photographer);
};

const getPhotographer = async (id) => {
  const response = await fetch("../FishEyeData.json");

  const { photographers } = await response.json();

  return photographers.find((photographer) => String(photographer.id) === id);
};

(async () => {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");

  const photographer = await getPhotographer(photographerId);

  displayPhotographer(photographer);
})();
