const getProfileTemplate = ({
  name,
  city,
  country,
  tagline,
  tags,
  portrait,
}) => {
  const generateTags = () =>
    `<p>${tags
      .map((tag) => `<button class="tag">#${tag}</button>`)
      .join(" ")}</p>`;

  return `
    <div class="block-photographer">
        <div class="photographer-infos">
            <h1 class="photographer__name photographer__name-page">${name}</h1>
            <h2 class="photographer__city">${city},${country}</h2>
            <p class="photographer__tagline">${tagline}</p>
            ${generateTags()}
        </div>
        <button class="photographer__contact">Contactez-moi</button>
        <img class="photographer__img photographer__img-page" src="/Home-img/${portrait}" alt="${name}">
    </div>`;
};

export const displayProfile = (photographer) => {
  const photographerPagesElement = document.querySelector("#photographer-page");

  photographerPagesElement.innerHTML = getProfileTemplate(photographer);
};
