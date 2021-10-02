const getMediaTemplate = (element) => {
  const videoOrimage = ({ image, video, photographerId, name }) => {
    if (image) {
      return `<img class="photographer-work__photos" src ="/images/${photographerId}/${image}" alt="${name}">`;
    }

    if (video) {
      return `<iframe src="/images/${photographerId}/${video}"></iframe>`;
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

export const displayMedias = (medias) => {
  const photographerPagesImages = document.querySelector(
    "#photographer-images"
  );

  photographerPagesImages.innerHTML = medias.map(getMediaTemplate).join("");
};

// logic of filters should be there, think about re-calling displayMedias on a specified event (addEventListerner onchange or click, you choose) add parameters such as orderBy, order etc... ie: order likes, orderBy ASC || DESC

// 1) get the number of total likes (reduce) [1, 2 ,3 ,4].reduce((acc, cur) => acc + cur, 0)
// 2) add an event when an user click on ,likes to increment the value of a specified likes and the total likes by calling again the displayMedias with the new likes values on a specified media
