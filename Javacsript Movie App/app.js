const modal = document.getElementById('add-modal')
const addMovieBtn = document.getElementById('add-movie-btn')
const backDrop = document.getElementById('backdrop') 
const cancelAddMovieButton = document.getElementById('cancel-btn')
const addMovieButton = document.getElementById('add-btn')
const userInputs = document.querySelectorAll('input')
const entryText = document.getElementById('entry-text')

function updateUI() {
    if (movies.length === 0) {
        entryText.style.display = 'block'
    } else {
        entryText.style.display = 'none'
    }
}

function renderMovies(title,imageUrl,rating) {
    const newMovieElements = document.createElement('li')
    newMovieElements.className = 'movie-element'
    newMovieElements.innerHTML = `
    <div class="movie-element__image">
    <img src='${imageUrl}' alt='${title}'>
    </div>
    <div class='movie-element__info'>
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElements)
} 

function toggleMovieModal() {
    modal.classList.toggle('visible')
    toggleBackDrop()
}

function toggleBackDrop() {
    backDrop.classList.toggle('visible')
} 

function backDropClickHandler() {
    toggleMovieModal()
}

function cancelAddMovie() {
    toggleMovieModal()
}

function clearMovieInputs() {
    userInputs[0].value = ''
    userInputs[1].value = ''
    userInputs[2].value = ''
}

const movies = []

function addMovie() {
    const titleValue = userInputs[0].value
    const imageUrlValue = userInputs[1].value
    const ratingValue = userInputs[2].value

    if (titleValue === '' || imageUrlValue === '' || ratingValue === '' || +ratingValue < 1 || +rating > 5) {
        alert('Please enter a valid value (between 1-5)')
        return
    } 

    const newMovies = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue    
    }
    movies.push(newMovies)
    console.log(movies)
    toggleMovieModal()
    clearMovieInputs()
    updateUI()
    renderMovies(newMovies.title, newMovies.image, newMovies.rating)
}


addMovieBtn.addEventListener('click', toggleMovieModal)
backDrop.addEventListener('click', backDropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
addMovieButton.addEventListener('click', addMovie)