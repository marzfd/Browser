function main() {
  document.body.style.fontFamily = "Arial, sans-serif";

  const nickname  = document.getElementById("nickname");
  nickname.textContent = 'Marzi';
  const favoriteFood  = document.getElementById("fav-food");
  favoriteFood.textContent = 'Okra Stew';
  const hometown  = document.getElementById("hometown");
  hometown.textContent = 'Kerman';

  const liEl = document.getElementsByTagName('li');
  for (let i = 0; i < liEl.length; i++) {
    liEl[i].className = "list-item";
  }

  const imgEl = document.createElement('img');
  imgEl.src = "profile.png";
  document.body.appendChild(imgEl);
}

main();