import { displayProfile } from "./profile.js";
import {
  displayMedias,
  displayTotalLikes,
  getTotalLikes,
  displayCarousel,
  getCarouselTemplate,
} from "./medias.js";
import { displayModal, modalTemplate } from "./contactModal.js";

const getPhotographer = async (id) => {
  const response = await fetch("../FishEyeData.json");

  const { photographers } = await response.json();

  return photographers.find((photographer) => String(photographer.id) === id);
};

let filter = "likes";

const displayFilters = () => {
  // html
  // onclick I should see my options
  // onclick one of my options :
  // 1 set a variable about filters 2 (bonus) set a query parameter from url assign to this filter
};

const getMedias = async (photographerId) => {
  const response = await fetch("../FishEyeData.json");
  const { media } = await response.json();

  return media.filter(
    (element) => String(element.photographerId) === photographerId
  );
  //.sort((a, b) => a[filter] > b[filter]);
};

(async () => {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");

  const photographer = await getPhotographer(photographerId);
  const medias = await getMedias(photographerId);
  const photos = getCarouselTemplate(photographerId);
  const likes = getTotalLikes(medias);
  const modal = modalTemplate();

  displayProfile(photographer);
  displayMedias(medias);
  displayTotalLikes(likes);
  displayModal(photographer);

  //displayModal(medias);
  // displayCarousel(photos);
})();
