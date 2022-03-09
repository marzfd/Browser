function main() {
  const favoriteQuotes = [
    {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "That which does not kill us makes us stronger.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "If you cannot do great things, do small things in a great way.",
      author: "Napoleon Hill"
    },
    {
      quote: "If opportunity doesn’t knock, build a door.",
      author: "Milton Berle"
    },
    {
      quote: "I haven’t failed. I’ve just found 10,000 ways that won’t work.",
      author: "Thomas Edison"
    },
    {
      quote: "Believe and act as if it were impossible to fail.",
      author: "Charles Kettering"
    },
    {
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "Walking with a friend in the dark is better than walking alone in the light.",
      author: "Helen Keller"
    },
    {
      quote: "The only true wisdom is knowing that you know nothing.",
      author: "Socrates"
    },
    {
      quote: "Success is liking yourself, liking what you do, and liking how you do it.",
      author: "Maya Angelou"
    },
  ];

    
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const newQuote = document.getElementById('newQuote');

  function randomQuote() {
    const random = Math.floor(Math.random() * favoriteQuotes.length);
    quote.textContent = `“${favoriteQuotes[random].quote}`;
    quote.animate(
      [
       {transform: 'scale(1.5,1.5)'},
       {transform: 'scale(1,1)'}
      ],
      {duration: 1000}
      );
    author.textContent = `- ${favoriteQuotes[random].author}`;
    author.animate(
      [
       {transform: 'scale(1.5,1.5)'},
       {transform: 'scale(1,1)'}
      ],
      {duration: 1000}
      );
  }

  newQuote.addEventListener('click', randomQuote)
}

main();