const headerTag = document.querySelector("header");

const toggleHeader = function () {
  // How far down the page we scrolled
  const pixels = window.pageYOffset;

  if (pixels > 60) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
};

const fadeBox = function () {
  const pixels = window.pageYOffset;
  // Make sure the alpha never exceeds the second number
  //
  const alpha = Math.min(pixels / 1000, 0.64);

  headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};

// Run the function as the page loads
toggleHeader();
fadeBox();

// Run the function on Scroll
document.addEventListener("scroll", function () {
  toggleHeader();
  fadeBox();
});
