"use strict";
const galleryItems = [
  {
    preview: "/src/images/preview-1.jpeg",
    fullview: "/src/images/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "/src/images/preview-2.jpeg",
    fullview: "/src/images/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "/src/images/preview-3.jpeg",
    fullview: "/src/images/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "/src/images/preview-4.jpeg",
    fullview: "/src/images/fullview-4.jpeg",
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
    fullview: "/src/src/images/fullview-9.jpeg",
    alt: "alt text 9"
  },
];

let galeryItem = [3,4,5,6];

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

// console.log(galeryItem);
// moveForvard();
// console.log(galeryItem);
// moveBack();
// console.log(galeryItem);



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
  <button class="btn btn--tool btn--prev js-prev">&#9013;</button>` +
  galeryItem.reduce((acc,el) => acc + createCard(galleryItems[el]), "")+
  `<button class="btn btn--tool btn--next js-next">&#9013;</button>
  </ul>`;
  console.log(result);
  return result;
}



// function createGallery(galleryItems) {
//   const result =
//     `<ul class="preview js-preview">
//     <button class="btn btn--tool btn--prev js-prev">&#9013;</button>` +
//     galleryItems.reduce((acc, obj) =>
//      acc + createCard(obj), "") +
//     `<button class="btn btn--tool btn--next js-next">&#9013;</button>
//     </ul>`;
//   return result;
// };

let dataFullview = galleryItems[1].fullview

function create() {
  const list = document.querySelector(".js-image-gallery");
  list.innerHTML = createFullviewImage(dataFullview) + createGallery(galleryItems);

  const gallery = document.querySelector(".preview");
  gallery.addEventListener("click", onGalleryClick);

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