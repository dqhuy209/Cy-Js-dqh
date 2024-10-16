const small_images = document.querySelectorAll(".small-images img");
small_images.forEach((img) => {
  img.addEventListener("click", () => {
    document.querySelector(".big-image img").src = img.src;
  });
});
