const catImg = document.querySelector('body img');
let position = 0;
catImg.style.left = "0px"


function main() {

  function catWalk() {
    if (position > screen.width) {
      position = 0;
    }
    // catImg.width is around 300
    else if (position == (screen.width / 2) - 150) {
      clearInterval(walking);
      catImg.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      setTimeout(() => {
        catImg.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
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
