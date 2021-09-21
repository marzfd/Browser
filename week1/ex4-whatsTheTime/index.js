function main() {
  
  function clock() {
    const currentTime = new Date();
    document.body.textContent = currentTime.toLocaleTimeString();
    
    console.log(currentTime);
  }

  window.setInterval(clock, 1000);

}

main();