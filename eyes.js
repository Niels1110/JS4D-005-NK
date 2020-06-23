const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

//  Function that control each iris
// The arguments:
// 'tag' -> know which iris we're controlling
// 'mouseX' & mouseY-> control the position based on the eye
const moveEye = function (tag, mouseX, mouseY) {
  tag.style.left = mouseX;
  tag.style.top = mouseY;
};

// Add 'Event' to capture the data from the browser
document.addEventListener("mousemove", function (event) {
  // We'll move the tag 'irisX' based on the pageX and pageY
  // key values and then pass them back to 'moveEye'
  moveEye(irisLeft, event.pageX, event.pageY);
  moveEye(irisRight, event.pageX, event.pageY);
});
