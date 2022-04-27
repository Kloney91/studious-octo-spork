/**
 * @param {HTMLDivElement} square 
 * @param {boolean} on 
 */
function toggle(square, on) {
  if (on) {
    square.style.width = "100px"
    square.style.height = "100px"
    // then make the square bigger
  } else {
    square.style.width = "50px";
    square.style.height = "50px";
    // make the square regular size
  }
}

/**
 * @param {Event} ev 
 */
function onHover(ev) {
  toggle(ev.target, true);
}

/**
 * @param {Event} ev 
 */
function onLeave(ev) {
  toggle(ev.target, false);
}


function main() {
  const squares = document.getElementsByClassName('square')

  for (let i = 0; i < squares.length; i += 1) {
    const square = squares[i];
    square.addEventListener('mouseenter', onHover);
    square.addEventListener('mouseleave', onLeave);
  }
}

main();
