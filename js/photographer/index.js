import { displayProfile } from "./profile.js";
import {
  displayMedias,
  displayTotalLikes,
  getTotalLikes,
  // displayCarousel,
  // getCarouselTemplate,
} from "./medias.js";
import { displayModal, modalTemplate, checkValidity,  } from "./contactModal.js";

const getPhotographer = async (id , name) => {
  const response = await fetch("../FishEyeData.json");

  const { photographers } = await response.json();

  return photographers
  .find((photographer) => String(photographer.id) === id)
};

let filter = "likes"; // dates or likes

const displayFilters = () => {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownOpen = document.querySelector("#dropdown-open");
  const linkTitle = document.querySelector(".link-title")
  dropdownButton.addEventListener("click", () => {
    dropdownOpen.classList.toggle("is-visible");
  });

  linkTitle.addEventListener("click" , () => {
    getMedias(photographerId)
  })


  // onclick I should see my options
  // onclick one of my options :
  // 1 set a variable about filters 2 (bonus) set a query parameter from url assign to this filter
};

const getMedias = async (photographerId) => {
  const response = await fetch("../FishEyeData.json");
  const { media } = await response.json();

  return media
    .filter((element) => String(element.photographerId) === photographerId)
    .sort((a, b) => a[filter] > b[filter]);
};

const loadPage = async () => {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");
  // const form = document.querySelector("fonm");

  //  form.onsubmit = checkValidity();

  const photographer = await getPhotographer(photographerId);
  const medias = await getMedias(photographerId);
  // const photos = getCarouselTemplate(photographerId);
  const likes = getTotalLikes(medias);

  displayProfile(photographer);
  displayMedias(medias);
  displayTotalLikes(likes);
  displayModal(photographer);
  //modalTemplate();
  checkValidity(medias);
 
  displayFilters();
  //displayModal(medias);
  // displayCarousel(photos);
};

(async () => {
  await loadPage();
})();
