"use strict";
import "./styles.css";


const galleryItems = [
  {
    preview: "imagejs/preview-1.jpg",
    fullview: "imagejs/fullview-1.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-02/",
    alt: "HTML,tag,attribute,elements,Git."
  },
  {
    preview: "imagejs/preview-2.jpg",
    fullview: "imagejs/fullview-2.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-03/",
    alt: "CSS,visual formatting,alignment,background."
  },
  {
    preview: "imagejs/preview-3.jpg",
    fullview: "imagejs/fullview-3.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-04/",
    alt: "color,alpha chanel,linear-gradient,::before,::after,float,filter"
  },
  {
    preview: "imagejs/preview-4.jpg",
    fullview: "imagejs/fullview-4.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-05/",
    alt: "position,z-index,HTML5 media"
  },
  {
    preview: "imagejs/preview-5.jpg",
    fullview: "imagejs/fullview-5.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-06/",
    alt:"Flexbox,shasow,transform,transition"
  },
  {
    preview: "imagejs/preview-6.jpg",
    fullview: "imagejs/fullview-6.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-07/",
    alt: "font,absolute and relative units,table,form"
  },
  {
    preview: "imagejs/preview-7.jpg",
    fullview: "imagejs/fullview-7.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-08/",
    alt: "Responsive,ChromeDevTols,Mobile-first CSS"
  },
  {
    preview: "imagejs/preview-8.jpg",
    fullview: "imagejs/fullview-8.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-09/",
    alt: "Grid,Bootstrap"
  },
  {
    preview: "imagejs/preview-9.jpg",
    fullview: "imagejs/fullview-9.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/html-css/module-10/",
    alt: "Retina,SVG,BEM"
  },
  {
    preview: "imagejs/preview-10.jpg",
    fullview: "imagejs/fullview-10.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/module-07/",
    alt: "SASS,variables,Nesting,&,Data Types,Mixin"
  },
  {
    preview: "imagejs/preview-11.jpg",
    fullview: "imagejs/fullview-11.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/module-08/",
    alt: "DOM"
  },
  {
    preview: "imagejs/preview-12.jpg",
    fullview: "imagejs/fullview-12.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/module-09/",
    alt: "event,eventListener"
  },
  {
    preview: "imagejs/preview-13.jpg",
    fullview: "imagejs/fullview-13.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/module-10/",
    alt: "alt text 1"
  },
  {
    preview: "imagejs/preview-14.jpg",
    fullview: "imagejs/fullview-14.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/module-11/",
    alt: "alt text 1"
  },
  {
    preview: "imagejs/preview-15.jpg",
    fullview: "imagejs/fullview-15.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/module-12/build/",
    alt: "alt text 1"
  },
  {
    preview: "imagejs/preview-16.jpg",
    fullview: "imagejs/fullview-16.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/project/",
    alt: "alt text 1"
  },
  {
    preview: "imagejs/preview-17.jpg",
    fullview: "imagejs/fullview-17.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/project/",
    alt: "alt text 1"
  },
  {
    preview: "imagejs/preview-18.jpg",
    fullview: "imagejs/fullview-18.jpg",
    lowsrc:"https://anatolykorsun.github.io/goit-fe-course/js/project/",
    alt: "alt text 1"
  },
  
];
let galeryItem = [0,1,2,3];

const showMore = (event) =>{
  window.open(`${event.target.lowsrc}`,'_blank');
}

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
let dataFullview = galleryItems[0].fullview
let lowsrc = galleryItems[0].lowsrc
  
function createFullviewImage(dataFullview,lowsrc) {
  
  return `<div class="fullview">
      <img class="large" src="${dataFullview}" lowsrc="${lowsrc}" alt="alt text 1"></div>`;
};

function createCard(galleryItems) {
  return `<li><img class="card" src=${galleryItems.preview} lowsrc= ${galleryItems.lowsrc} data-fullview=${galleryItems.fullview} alt="${galleryItems.alt}">
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




function create() {
  const list = document.querySelector(".js-image-gallery");
  list.innerHTML = createFullviewImage(dataFullview, lowsrc) + createGallery(galleryItems);

  const gallery = document.querySelector(".preview");
  gallery.addEventListener("click", onGalleryClick);

  hideButton();
 const fullviewImage = document.querySelector(".large");
 fullviewImage.addEventListener("click",showMore);

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
  lowsrc = event.target.getAttribute('lowsrc');
  create()
}

create()