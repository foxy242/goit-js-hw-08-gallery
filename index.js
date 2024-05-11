const movies = [
    {
        poster: './src/завантаження (2).png',
    },
    {
        poster: './src/завантаження (3).png',
    },
    {
        poster: './src/завантаження (1).png',
    },
    {
        poster: './src/завантаження.png',
    },
    {
        poster: './src/images (1).png',
    },
    {
        poster: './src/images (2).png',
    },
    {
        poster: './src/images (3).png',
    },
    {
        poster: './src/images(4).png',
    },
    {
        poster: './src/images.png',
    },
];
const moviesListEl = document.querySelector('.movies_list');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

movies.forEach(movie => moviesListEl.innerHTML += `
<li class="movies_item" data-name="${movie.name}">
    
    <img class="movies_img" src="${movie.poster}" alt="poster ${movie.name}"/>
    
</li>
`);

moviesListEl.addEventListener('click', (e) => {
    const findMovie = e.target.closest('.movies_item') === null ? false : e.target.closest('.movies_item').dataset.name;
    if (findMovie) {
        const movie = movies.find(movie => movie.name === findMovie);
        backdrop.classList.remove('hidden')
        modal.innerHTML = `
            <h2 class="modal_title">${movie.name}</h2>
            <p class="modal_year">Year: ${movie.year}</p>
            <p class="modal_storyline">Storyline: ${movie.stotyline}</p>
        `
    }
});

backdrop.addEventListener('click', () => backdrop.classList.add('hidden'))

// <h2 class="movies_title">${movie.name}</h2>
// <p class="movies_rate">${movie.rate}/10</p>