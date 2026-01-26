document.addEventListener("DOMContentLoaded", () => {
  // Create lightbox once
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.className = "lightbox";

  const img = document.createElement("img");
  img.id = "lightboxImg";
  img.alt = "Zoomed image";

  const hint = document.createElement("div");
  hint.className = "hint";
  hint.textContent = "Click anywhere (or press Esc) to close";

  lightbox.appendChild(img);
  lightbox.appendChild(hint);
  document.body.appendChild(lightbox);

  // Open on click
  document.querySelectorAll("img.zoomable").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      img.src = thumb.src;
      lightbox.classList.add("open");
    });
  });

  // Close on click anywhere
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
    img.src = "";
  });

  // Close on Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("open");
      img.src = "";
    }
  });
});
