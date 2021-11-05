import { displayProfile } from "./profile.js";
import {
  displayMedias,
  displayTotalLikes,
  filterLikes,
  getTotalLikes,
  // displayCarousel,
  // getCarouselTemplate,
} from "./medias.js";

import { displayModal } from "./contactModal.js";

const getPhotographer = async (id, name) => {
  const response = await fetch("../FishEyeData.json");

  const { photographers } = await response.json();

  return photographers.find((photographer) => String(photographer.id) === id);
};
//
// let filter = "likes"; // dates or likes

const displayFilters = () => {
  const dropdownButton = document.querySelector("#dropdown-icon");
  const dropDownUp = document.createElement("i");
  dropDownUp.className = "fas fa-angle-up";
  dropDownUp.innerHTML;
  const dropdownOpen = document.querySelector("#dropdown-open");
  const linkTitle = document.querySelector(".link-title");
  dropdownButton.addEventListener("click", () => {
    dropdownButton.replaceWith(dropDownUp);
    dropdownOpen.classList.toggle("is-visible");

    dropDownUp.addEventListener("click", () => {
      dropdownOpen.classList.toggle("is-not-visible");
      dropDownUp.replaceWith(dropdownButton);
    });
  });

  linkTitle.addEventListener("click", () => {
    getMedias(photographerId);
  });
};

const getMedias = async (photographerId) => {
  const response = await fetch("../FishEyeData.json");
  const { media } = await response.json();

  // let filter = "likes";

  // });
  return media.filter(
    (element) => String(element.photographerId) === photographerId
  );
  // .sort((a, b) => a[filter] > b[filter]);
};

const loadPage = async () => {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");

  const photographer = await getPhotographer(photographerId);
  const medias = await getMedias(photographerId);
  // const photos = getCarouselTemplate(photographerId);
  const likes = getTotalLikes(medias);

  displayProfile(photographer);
  displayMedias(medias);
  displayTotalLikes(likes, photographer);
  displayModal(photographer);
  filterLikes(medias);
  displayFilters();
};

(async () => {
  await loadPage();
})();
