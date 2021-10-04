import { displayProfile } from "./profile.js";
import { displayMedias, displayTotalLikes, getTotalLikes } from "./medias.js";

const getPhotographer = async (id) => {
  const response = await fetch("../FishEyeData.json");

  const { photographers } = await response.json();

  return photographers.find((photographer) => String(photographer.id) === id);
};

const getMedias = async (photographerId) => {
  const response = await fetch("../FishEyeData.json");
  const { media } = await response.json();

  return media.filter(
    (element) => String(element.photographerId) === photographerId
  );
};

(async () => {
  const url = new URL(window.location.href);
  const photographerId = url.searchParams.get("id");

  const photographer = await getPhotographer(photographerId);
  const medias = await getMedias(photographerId);

  const likes = getTotalLikes(medias);

  displayProfile(photographer);
  displayMedias(medias);
  displayTotalLikes(likes);
})();
