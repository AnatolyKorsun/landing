"use strict";
const galleryItems = [
  {
    preview: "/src/images/preview-1.jpg",
    fullview: "/src/images/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "/src/images/preview-2.jpg",
    fullview: "/src/images/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "/src/images/preview-3.jpg",
    fullview: "/src/images/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "/src/images/preview-4.jpg",
    fullview: "/src/images/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "/src/images/preview-5.jpeg",
    fullview: "/src/images/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "/src/images/preview-6.jpeg",
    fullview: "/src/images/fullview-6.jpeg",
    alt: "alt text 6"
  },
  {
    preview: "/src/images/preview-7.jpeg",
    fullview: "/src/images/fullview-7.jpeg",
    alt: "alt text 7"
  },
  {
    preview: "/src/images/preview-8.jpeg",
    fullview: "/src/images/fullview-8.jpeg",
    alt: "alt text 8"
  },
  {
    preview: "/src/images/preview-9.jpeg",
    fullview: "/src/images/fullview-9.jpeg",
    alt: "alt text 9"
  },
];
let galeryItem = [0,1,2,3];


const hideButton = () =>{
  const buttonForvard = document.querySelector(".btn--next");
  const buttonBack = document.querySelector(".btn--prev");
  if(galeryItem[galeryItem.length-1] === Number(galleryItems.length-1)){
    buttonForvard.style.visibility = "hidden";
  };
  if(galeryItem[0] === 0){
    buttonBack.style.visibility = "hidden";
  };
}

const moveForvard = () =>{
galeryItem.forEach(function(el,ind,arr){
arr[ind] = el + 1;});
create();
}

const moveBack = () =>{
  galeryItem.forEach(function(el,ind,arr){
    arr[ind] = el - 1;
    });
create();
}

function createFullviewImage(dataFullview) {
  return `<div class="fullview">
      <img src="${dataFullview}" alt="alt text 1"></div>`;
};

function createCard(galleryItems) {
  return `<li><img src=${galleryItems.preview} data-fullview=${
    galleryItems.fullview
    } alt="${galleryItems.alt}">
    </li>`;
};

function createGallery(){
  const result = `<ul class="preview js-preview">
  <div class="btn btn--tool btn--prev js-prev"></div>`+
  galeryItem.reduce((acc,el) => acc + createCard(galleryItems[el]), "")+
  `<div class="btn btn--tool btn--next js-next"></div>
  </ul>`;
  return result;
}

let dataFullview = galleryItems[0].fullview

function create() {
  const list = document.querySelector(".js-image-gallery");
  list.innerHTML = createFullviewImage(dataFullview) + createGallery(galleryItems);

  const gallery = document.querySelector(".preview");
  gallery.addEventListener("click", onGalleryClick);

  hideButton();
 
  const preview = document.querySelector(".js-prev");
  preview.addEventListener("click",moveBack);
  
  const next = document.querySelector(".js-next");
  next.addEventListener("click",moveForvard);
};

function onGalleryClick(event) {
  const target = event.target;
  const nodeName = target.nodeName;
  if (nodeName !== 'IMG') return;
  dataFullview = target.getAttribute('data-fullview');
  create()
}

create()