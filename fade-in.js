const animatedTags = document.querySelectorAll(
  "h2, h3, p, section img, button"
);

const fadeIn = () => {
  // Look through the selected tags and use
  // 'getBoundincClientRect() to see if they're in
  // the window
  animatedTags.forEach((tag) => {
    // Get the tags' top and bottom positions
    // in relation to the window
    tagTop = tag.getBoundingClientRect().top;
    tagBottom = tag.getBoundingClientRect().bottom;

    // Define a delay variable to help cascade the
    // fade in animation
    let delay = 0.25;

    // If the top of the tag is less than the height
    // of the browser (ie. in view), fade in using
    // CSS keyframes
    if (tagTop < window.innerHeight) {
      // Call the CSS Keyframe animation 'fadein' and
      // use the delay variable
      tag.style.animation = `fadein 1s ${delay}s both`;
      // Add .25s to the delay variable for each animation
      // cycle
      delay = delay + 0.25;
    }
  });
};

fadeIn();

document.addEventListener("scroll", function () {
  fadeIn();
});

window.addEventListener("resize", function () {
  fadeIn();
});
