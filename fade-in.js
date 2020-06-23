const animatedTags = document.querySelectorAll(
  "h2, h3, p, section img, button"
);

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = () => {
  // Look through the selected tags and use
  // 'getBoundincClientRect() to see if they're in
  // the window

  // Define a delay variable to help cascade the
  // fade in animation
  let delay = 0.25;

  animatedTags.forEach((tag) => {
    // Get the tags' top and bottom positions
    // in relation to the window
    tagTop = tag.getBoundingClientRect().top;
    tagBottom = tag.getBoundingClientRect().bottom;

    // If the top of the tag is less than the height
    // of the browser (ie. in view)
    // and '&&' the bottom of the page is further up the
    // page so we don't see it, then
    // call CSS keyframes
    if (tagTop < window.innerHeight && tagBottom > 0) {
      // Call the CSS Keyframe animation 'fadein' and
      // use the delay variable
      tag.style.animation = `fadein 1s ${delay}s both`;

      // Add .25s to the delay variable for each
      // animation cycle
      delay = delay + 0.25;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

// on load, run fadeIn
fadeIn();

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn();
});

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn();
});
