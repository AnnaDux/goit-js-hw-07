import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery__item';
        const galleryLink = document.createElement('a');
        galleryLink.className = 'gallery__item';
        galleryLink.href = element.original;
        const galleryImage = document.createElement('img');
        galleryImage.className = 'gallery__image';
        galleryImage.src = element.preview;
        galleryImage.setAttribute('data-source', element.original);
        galleryImage.alt = element.description;
        galleryItem.append(galleryLink);
        galleryLink.append(galleryImage);
        items.push(galleryItem);
    })
gallery.append(...items);

gallery.addEventListener('click', openModal);
function openModal(event) {
    event.preventDefault();
  }

var lightbox  = new SimpleLightbox('.gallery a', {
	captionDelay: 250,
    captionPosition: 'bottom',
    captionDelay: 250,
})

