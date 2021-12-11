const sliderShow = document.querySelector(".eg-gallery__nav");

const galleryVideos = document.querySelector(".gallery-videos");
const galleryPhotos = document.querySelector(".gallery-photos");

sliderShow.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav_gallery-photos") &&
    galleryPhotos.classList.contains("none")
  ) {
    // Swiper.update()
    galleryPhotos.classList.remove("none");
    galleryVideos.classList.add("none");
  }
  if (
    e.target.classList.contains("nav_gallery-videos") &&
    galleryVideos.classList.contains("none")
  ) {

    galleryVideos.classList.remove("none");
    galleryPhotos.classList.add("none");
  }
});
