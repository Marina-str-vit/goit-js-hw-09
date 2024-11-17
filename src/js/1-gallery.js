import arrGalleryJson from "../img/images.json"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("beforeend", createMarkup(arrGalleryJson));

function createMarkup(arrGallery) {
  return arrGallery.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
        />
      </a>
    </li>
    `).join("");      
}


const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0,
  captionsData: 'alt',
  captionDelay: 250,
  className: 'simple-lightbox',
});


console.log(SimpleLightbox);
