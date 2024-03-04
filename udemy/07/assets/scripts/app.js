const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
// const startAddMovieButton = document.getElementById('#addBtn');
// const startAddMovieButton = document.querySelector('#addBtn');

const backdraop = document.getElementById('backdrop');
// const backdraop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');

const entryTextSection = document.getElementById('entry-text'); 

const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

// 뒷 배경 dim 처리 활성화/비활성화
const toggleBackdrop = () => {
    backdraop.classList.toggle('visible');
};

// 등록한 영화가 있냐 없냐에 따라 기본 화면 보여주거나 삭제
const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

// 정말 삭제할꺼야? 확인하는 confirm 모달 닫기
const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

// 영화 삭제
const deleteMovieHandler = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
};

// 등록한 영화 클릭 시 삭제를 실행시키는 함수 
const startDeleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');  // 진짜 삭제할꺼야? 모달창 띄우기
    toggleBackdrop();   // 뒷 배경 dim 처리 
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');   // 진짜 삭제할꺼야? 모달창 내부의 'Cancel' 버튼
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');     // 진짜 삭제할꺼야? 모달창 내부의 'Yes' 버튼

    // 이전에 등록된 이벤트 리스너를 제거, 새 이벤트 리스너를 등록하여 이벤트 리스너가 중복되어 실행되는 것을 방지
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
    // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // will not work!
    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
};

// 화면에 등록한 영화 띄우기
const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMoviewElement = document.createElement('li');
    newMoviewElement.className = 'movie-element';
    newMoviewElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt ="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMoviewElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMoviewElement);
};

// 영화 등록 모달창 숨기기
const closeMovieModal = () => {
   addMovieModal.classList.remove('visible'); 
};

// 영화 등록 모달창 보여주기
const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

// input 내용 지우기
const clearMovieInput = () => {
    for(const userInput of userInputs){
        userInput.value = '';
    }
};

// 영화 등록 모달창에서 'Cancel' 버튼 클릭 시 실행
const cancelAddMovieHandler = () => {
    closeMovieModal();  // 영화 등록 모달창 닫기
    toggleBackdrop();   // 뒷 배경 dim 처리 삭제
    clearMovieInput();  // input 내용 지우기
};

// 영화 등록 모달창에서 'Add' 버튼 클릭 시 실행
const addMovieHandler = () => {
    const titleVaule = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleVaule.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || parseInt(ratingValue) < 1 || +ratingValue > 5){
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const newMovie = {
        id : Math.random().toString() ,
        title : titleVaule ,
        image : imageUrlValue ,
        rating : ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();  // 영화 등록 모달창 닫기
    toggleBackdrop();   // 뒷 배경 dim 처리 삭제
    clearMovieInput();  // input 내용 지우기
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);    // 등록한 영화 화면에 띄워주기
    updateUI(); // 등록한 영화가 있냐 없냐에 따라 기본 화면 보여주거나 삭제
};

// 뒷 배경 dim 처리 클릭 시 실행 (띄워져 있는 모든 모달창 닫기)
const backdropClickHandler = () => {
    closeMovieModal();          // 영화 등록 모달창 숨기기
    closeMovieDeletionModal();  // 정말 삭제할꺼야? 확인하는 confirm 모달 닫기
    clearMovieInput();          // input 내용 지우기
};

// 클릭 이벤트 
startAddMovieButton.addEventListener('click', showMovieModal);
backdraop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
