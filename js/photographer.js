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

//Example of media
// "media": [
//   {
//     "id": 342550,
//     "photographerId": 82,
//     "title": "Fashion Yellow Beach",
//     "image": "Fashion_Yellow_Beach.jpg",
//     "tags": ["fashion"],
//     "likes": 62,
//     "date": "2011-12-08",
//     "price": 55
//   },

const photographerImagesTemplate = (element) => {
  return `
    <div class="photographer-work" data-id="${element.photographerId}">
      <img class="photographer-work__photos" src="/images/${element.photographerId}/${element.image}">
      <div class="photographer-work__description">
        <p class="photographer-work__title">${element.title}</p>
        <p class="photographer-work__likes">${element.likes}</p>
        <i class="photographer-work__heart far fa-heart"></i>
      </div>
    </div>
    
   `;
};

const displayPhotographerImages = (media) => {
  const photographerPagesImages = document.querySelector(
    "#photographer-images"
  );

  photographerPagesImages.innerHTML = media
    .map(photographerImagesTemplate)
    .join(" ");
};

const getMedia = async () => {
  const response = await fetch("../FishEyeData.json");

  return (await response.json()).media;
};

(async () => {
  const media = await getMedia();

  displayPhotographerImages(media);
})();

// Likes

const HeartIcon = document.querySelector(".photographer-work__heart");

HeartIcon.addEventListener("click", () => {});
