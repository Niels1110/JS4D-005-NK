const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

let interval = null;

const startInterval = function () {
  // Stop the interval from running,
  // if it's already running
  clearInterval(interval);
  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    moveEye(irisLeft, x, y);
    moveEye(irisRight, x, y);
  }, 3000);
};

//  Function that control each iris
// The arguments:
// 'tag' -> know which iris we're controlling
// 'mouseX' & mouseY-> control the position based on the eye
const moveEye = function (tag, mouseX, mouseY) {
  // get center of the eyes, 'the anchor point'
  const eyeMidX = tag.getBoundingClientRect().left;
  const eyeMidY = tag.getBoundingClientRect().top;

  // find the difference between the eye and the mouse
  const diffX = mouseX - eyeMidX;
  const diffY = mouseY - eyeMidY - window.pageYOffset;

  // pythagoras
  const diff = Math.sqrt(diffX * diffX * diffY * diffY);

  const radius = Math.min(3, diff);

  // Work out the difference between the anchor point and mouse
  const angle = Math.atan2(diffY, diffX);

  const cappedX = radius * Math.cos(angle);
  const cappedY = radius * Math.sin(angle);

  const eyeTag = tag.querySelector("div");

  eyeTag.style.left = cappedX + "px";
  eyeTag.style.top = cappedY + "px";
};

// On page load, start the interval
startInterval();

// Add 'Event' to capture the data from the browser
document.addEventListener("mousemove", function (event) {
  // on mouse move, start the interval
  startInterval();
  // We'll move the tag 'irisX' based on the pageX and pageY
  // key values and then pass them back to 'moveEye'
  moveEye(irisLeft, event.pageX, event.pageY);
  moveEye(irisRight, event.pageX, event.pageY);
});
