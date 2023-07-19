const arrayQuotes = [

    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity.'
    },


    {
        'quote': 'Be yourself; everyone else is already taken.',
        'author': 'Oscar Wilde' 
    },


    {
        'quote': 'So many books, so little time.',
        'author': 'Frank Zappa' 
    },


    { 
       'quote': 'A room without books is like a body without a soul.', 
       'author': 'Marcus Tullius Cicero'
    },


    {
       'quote': 'Be the change that you wish to see in the world.',
       'author': 'Mahatma Gandhi'
    },


    { 
        'quote': 'A friend is someone who knows all about you and still loves you.', 
        'author': 'Elbert Hubbard'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayQuotes.length + 1);

    document.querySelector('#quote').textContent = `\"${arrayQuotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${arrayQuotes[random].author}`;
    
}