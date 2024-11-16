// import arrGallery from ".."
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import "simplelightbox/dist/simple-lightbox.min.js"

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("beforeend", createMarkup(images));

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
  captionsData: 'alt',
  captionDelay: 250,
});


console.log(SimpleLightbox);
