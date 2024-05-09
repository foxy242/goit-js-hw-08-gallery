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

movies.forEach(movie => moviesListEl.innerHTML += 
`<li>
    <img class="movies_img" src="${movie.poster}" alt="poster ${movie.name}"/>
</li>`
);

backdrop.addEventListener('click', () => backdrop.classList.add('hidden'))