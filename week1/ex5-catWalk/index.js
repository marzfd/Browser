const catImg = document.querySelector('body img');
let position = 0;
catImg.style.left = "0px"
    // catImg.width is around 300

function main() {

  function catWalk() {
    if (position > screen.width) {
      position = 0;
    }
    else if (position == (screen.width / 2) - 150) {
      clearInterval(walking);
      catImg.src = 'tenor.gif';
      setTimeout(() => {
        catImg.src = 'cat-walk.gif';
        position += 10;
        main();
      }, 5000);
    }
    else {
      catImg.style.left = `${position}px`;
      position += 10;
    };
  };

  const walking = setInterval(catWalk, 50);
};

main();
