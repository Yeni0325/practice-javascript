// const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// let person = {
//     'first name' : 'Max' ,
//     age : 30 ,
//     hobbies : ['Sports', 'Cooking'] , 
//     [userChosenKeyName] : '...' , 
//     greet : function(){
//         alert('Hi there!');
//     } , 
//     1.5 : 'hello'
// };

// person = {
//     name : 'Max' ,
//     age : 30 ,
//     hobbies : ['Sports', 'Cooking'] , 
//     greet : function(){
//         alert('Hi there!');
//     } , 
//     isAdmin : true
// };

// person.age = 33;
// delete person.age;
// person.age = undefined;
// person.age = null;
// person.isAdmin = true;

// const keyName = 'first name';
// console.log(person.keyName);    // keyName에 속해있는 프로퍼티의 값을 찾기 때문에 undefined 출력
// console.log(person[keyName]);   // max
// console.log(person[1.5]);
// console.log(person);

"use strict";

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// 사용자가 동적으로 작성한 내용을 가져와 화면에 뿌려줌
const renderMovies = (filter = '') => { // 특정 값이 전달되지 않았을 경우 빈 문자열이 기본값임
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    // 전체 영화 중 검색어를 가지고 있는 영화만 가져옴
    const filterMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filterMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // if('info' in movie){

        // }
        // if(movie.info === undefined){   // 해당 프로퍼티가 존재하지 않을 때 undefined를 반환

        // }

        const { info, ...otherPops } = movie;
        console.log(otherPops);
        // const {title : movieTitle} = info;
        let {getFormattedTitle} = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);
        let text = getFormattedTitle.call(movie) + ' - ';
        for(const key in info){
            if(key !== 'title' && key !== '_title'){
                text = text + `${key} : ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

// 'add Movie' 버튼 클릭 시 실행되는 함수로 newMovie라는 객체에 화면에 작성한 내용을 담고 movies 배열에 푸시까지 해줌
const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(extraName.trim() === '' || extraValue.trim() === ''){
        return;
    }

    const newMovie = {
        info : {
            set title(val){
                if(val.trim() === ''){
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;            
            } ,
            get title() {
                return this._title;
            },
            [extraName] : extraValue
        } ,
        id : Math.random().toString() , 
        getFormattedTitle(){
            console.log(this);
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title =  title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    renderMovies();    
};

const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler.bind());
searchBtn.addEventListener('click', searchMovieHandler);