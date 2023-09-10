import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.setAttribute("data-source", item.original);
    galleryImage.setAttribute("title", item.description);

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    galleryContainer.appendChild(galleryItem);
  });

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  lightbox.on("shown.simplelightbox", (e) => {
    const captionElement = document.createElement("div");
    captionElement.classList.add("lightbox-caption");
    captionElement.innerText = e.opts.captions[e.index];
    e.modal.appendChild(captionElement);
  });
});
