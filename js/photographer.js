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
//   {v
//     "id": 342550,
//     "photographerId": 82,
//     "title": "Fashion Yellow Beach",
//     "image": "Fashion_Yellow_Beach.jpg",
//     "tags": ["fashion"],
//     "likes": 62,
//     "date": "2011-12-08",
//     "price": 55
//   },
const getMediaTemplate = (element) => {
  return `
    <div class="photographer-work">
      <div>
        ${videoOrimage(element.image, element.video, element)}
      </div>
      <div class="photographer-work__description">
        <p class="photographer-work__title">${element.title}</p>
        <p class="photographer-work__likes">${element.likes}</p>
        <i class="photographer-work__heart far fa-heart"></i>
      </div>
    </div>
    
   `;
};

const displayMedias = (medias) => {
  const photographerPagesImages = document.querySelector(
    "#photographer-images"
  );

  photographerPagesImages.innerHTML = medias.map(getMediaTemplate).join("");
};

const getMedia = async (photographerId) => {
  const response = await fetch("../FishEyeData.json");
  const { media } = await response.json();
  return media.filter(
    (element) => String(element.photographerId) === photographerId
  );
};

(async () => {
  const url = new URL(window.location.href);
  const photographerPage = url.searchParams.get("photographerId");
  const media = await getMedia(photographerPage);

  displayMedias(media);
})();

function videoOrimage(image, video, element) {
  if ("image" in element) {
    return `<img class="photographer-work__photos" src ="/images/${element.photographerId}/${element.image}" alt="${element.name}">`;
  } else if ("video" in element) {
    return `<iframe src="/images/${element.photographerId}/${element.video}"></iframe>`;
  }
}

// button dropdown

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownOpen = document.querySelector("#dropdown-open");

dropdownButton.addEventListener("click", function () {
  dropdownOpen.style.display = "flex";
});


// modal

const modalbg = document.querySelector(".bground");
const modalbtn = document.querySelector(".photographer__contact");


modalbtn.addEventListener("click", launchModal);

function launchModal(){
  modalbg.style.display = "block";
};