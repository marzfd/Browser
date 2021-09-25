function myFavoriteHobbies() {

  const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

  const ulEl = document.createElement('ul');
  document.body.appendChild(ulEl);

  myHobbies.forEach(hobby => {
    const liEl = document.createElement('li');
    liEl.textContent = hobby;
    ulEl.appendChild(liEl);
  });
  
}

myFavoriteHobbies();