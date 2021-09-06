/*
  Example of photographers
    {
      "name": "Mimi Keel",
      "id": 243,
      "city": "London",
      "country": "UK",
      "tags": ["portrait", "events", "travel", "animals"],
      "tagline": "Voir le beau dans le quotidien",
      "price": 400,
      "portrait": "MimiKeel.jpg"
    }
*/

const photographersTemplate = (photographer) => {
  return `
      <div class="photographer-container">
        <a class="photographer__link" href="/pages/photographer.html?id=${
          photographer.id
        }&photographerId=${photographer.id}">
          <img class="photographer__img" src="/Home-img/${
            photographer.portrait
          }" alt="${photographer.name}">
          <h2 class="photographer__name">${photographer.name}</h2>
        </a>
        <h3 class="photographer__city">${photographer.city}</h3>
        <p class="photographer__tagline">${photographer.tagline}</p>
        <p class="photographer__price">${photographer.price}€/jour</p>
        <p class="photographer__tags">${photographer.tags
          .map((tag) => `<button class="tag">#${tag}</button>`)
          .join(" ")}</p>
      </div>
      
    `;
};

const displayPhotographers = (photographers) => {
  const photographersElement = document.querySelector("#photographers");

  photographersElement.innerHTML = photographers
    .map(photographersTemplate)
    .join("");
};

const getPhotographers = async () => {
  const response = await fetch("../FishEyeData.json");

  return (await response.json()).photographers;
};

(async () => {
  const photographers = await getPhotographers();

  displayPhotographers(photographers);
})();
