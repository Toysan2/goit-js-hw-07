import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const galleryElements = galleryItems.map(
  ({ preview, original, description }) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = preview;
    galleryImage.alt = description;
    galleryImage.dataset.source = original;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
  }
);

galleryList.append(...galleryElements);

galleryList.addEventListener("click", handleGalleryItemClick);

function handleGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${originalImageUrl}" width="800" height="600">`
  );

  instance.show();

  const closeLightboxOnEscape = (e) => {
    if (e.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeLightboxOnEscape);
    }
  };

  window.addEventListener("keydown", closeLightboxOnEscape);
}
