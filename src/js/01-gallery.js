// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector(`.gallery`);

const photoGalleryMarkup = CreateGalleryElements(galleryItems);


function CreateGalleryElements (gallery) {
    return gallery.map((item) => {
        return `<li class ='gallery__link'><a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview }" alt="${item.description}" />
        </a></li>`           
    }).join(``)
    
}

galleryBox.insertAdjacentHTML(`beforeend`, photoGalleryMarkup);

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});