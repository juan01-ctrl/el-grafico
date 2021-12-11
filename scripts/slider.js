const sliderShow = document.querySelector(".eg-gallery__nav");

const galleryVideos = document.querySelector(".gallery");
const galleryPhotos = document.querySelector(".gallery1");

sliderShow.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav_gallery-photos") &&
    galleryPhotos.classList.contains("none")
  ) {
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
