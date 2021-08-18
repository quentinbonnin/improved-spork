const photographersPagesTemplate = (photographer) => {
  return `
    <div>
        <h1>${photographer.name}</h1>
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
