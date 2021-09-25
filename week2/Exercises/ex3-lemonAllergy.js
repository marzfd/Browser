const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function getRidOfLemon() {
  const favoriteFruitBasket = fruitBasket.filter(fruit => fruit !== 'Lemon');
  return console.log(`My mom bought me a fruit basket, containing: ${favoriteFruitBasket.join(', ')}.`);  
}

getRidOfLemon(fruitBasket);