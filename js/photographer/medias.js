const getMediaTemplate = (element) => {
    const videoOrimage = ({ image, video , photographerId , name}) => {
        if (image) {
            return `<img class="photographer-work__photos" src="/images/${photographerId}/${image}" alt="${name}">`;
        }

        if (video) {
            return `<iframe src="/images/${photographerId}/${video}"></iframe>`
        }
    };
    return `
      <div class="photographer-work">
        <div>
          ${videoOrimage(element)}
        </div>
        <div class="photographer-work__description">
          <p class="photographer-work__title">${element.title}</p>
          <p class="photographer-work__likes">${element.likes}</p>
          <i class="photographer-work__heart far fa-heart"></i>
        </div>
      </div>
      
     `;
  };


  export const displayMedias = (medias) => {
    const photographerPagesImages = document.querySelector(
      "#photographer-images"
    );
  
    photographerPagesImages.innerHTML = medias.map(getMediaTemplate).join("");
  };