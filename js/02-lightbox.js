import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>
  `;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});
