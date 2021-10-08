const getMediaTemplate = (element) => {
  const videoOrimage = ({ image, video, photographerId, name }) => {
    if (image) {
      return `<img class="photographer-work__photos" src ="/images/${photographerId}/${image}" alt="${name}">`;
    }

    if (video) {
      return `<iframe class="photographer-work__videos" width="380px" height="480px" src="/images/${photographerId}/${video}"></iframe>`;
    }
  };

  return `
      <div class="photographer-work">
        <div>
         ${videoOrimage(element)}
        </div>
        <div class="photographer-work__description">
          <a class="photographer-work__title">${element.title}</a>
          <span class="photographer-work__likes">${element.likes}</span>
          <i class="photographer-work__heart fas fa-heart"></i>
        </div>
      </div>
     `;
};

export const getCarouselTemplate = ({photographerId , image}) => {
  return `
            <i class="fas fa-chevron-circle-left"></i>
            <img class="carousel__photos" src="/images/${photographerId}/${image}">
            <i class="fas fa-chevron-circle-right"></i>
         
          `;
}

export const displayMedias = (medias) => {
  const photographerPagesImages = document.querySelector(
    "#photographer-images"
  );

  const incrementLike = ({ id, likes }) => {
    const mediasWithUpdatedLikes = medias.map((element) =>
      element.id === id ? { ...element, likes: likes + 1 } : element
    );
    const totalLikes = getTotalLikes(mediasWithUpdatedLikes);

    displayMedias(mediasWithUpdatedLikes);
    displayTotalLikes(totalLikes);
  };

  photographerPagesImages.innerHTML = medias.map(getMediaTemplate).join("");
  document
    .querySelectorAll(".photographer-work__heart")
    .forEach(
      (element, index) => (element.onclick = () => incrementLike(medias[index]))
    );
  document
      .querySelectorAll('.photographer-work__photos')
      .forEach(
        (images) => (images.onclick = () =>  images.classList.add('zoom-photos')))
  document
      .querySelectorAll('.photographer-work__videos')
      .forEach(
        (element) => (element.onclick = () => element.classList.toggle('zoom-photos')
      ))

};

export const displayTotalLikes = (likes, price) => {
  if (document.querySelector("#total-likes")) {
    return (document.querySelector("#total-likes").innerHTML = likes);
  }
  if (document.querySelector("#total-price")) {
    return (document.querySelector("#total-price").innerHTML = price);
  }

  const likesElement = document.createElement("div")
  likesElement.className = 'element__likes';
  likesElement.innerHTML = `
                            <p id="total-likes">${likes}</p>
                            <i class="total-heart fas fa-heart"></i>
                            <p id="total-price">${price}/jours</p>
                            `;

  document.body.append(likesElement);
};

export const getTotalLikes = (medias) => {
  return medias.reduce((likes, media) => likes + media.likes, 0);
};

export const displayCarousel = (medias) => {

  const photographerCarousel = document.querySelector('#carousel');

  photographerCarousel.innerHTML = [medias].map(getCarouselTemplate).join(""); 
}
