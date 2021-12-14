const sliderShow = document.querySelector(".eg-gallery__nav");

const galleryVideos = document.querySelector(".gallery-videos");
const galleryPhotos = document.querySelector(".gallery-photos");
const navGalleryPhotos = document.querySelector(".nav_gallery-photos");
const navGalleryVideos = document.querySelector(".nav_gallery-videos");


sliderShow.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav_gallery-photos") &&
    galleryPhotos.classList.contains("none")
  ) {
    // Swiper.update()
    galleryPhotos.classList.remove("none");
    galleryVideos.classList.add("none");

    navGalleryPhotos.classList.add("js-active")
    navGalleryVideos.classList.remove("js-active")

  }
  if (
    e.target.classList.contains("nav_gallery-videos") &&
    galleryVideos.classList.contains("none")
  ) {

    galleryVideos.classList.remove("none");
    galleryPhotos.classList.add("none");

    navGalleryPhotos.classList.remove("js-active")
    navGalleryVideos.classList.add("js-active")
  }
});
