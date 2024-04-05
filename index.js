"usestrict"

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "40442533-4b6791bab363289733298af78";

const formEl = document.querySelector('form');
const inputEl = document.querySelector('.search-input');
const galleryEl = document.querySelector('.gallery-div');
const moreBtnEl = document.querySelector('.more-btn');
const upBtnEl = document.querySelector('.up-btn');

let page = 1;

window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        upBtnEl.style.display = "block";
    } else {
        upBtnEl.style.display = "none";
    }
};

upBtnEl.onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

async function searchQuery() {
    const inputData = inputEl.value;
    const url = `${BASE_URL}?key=${API_KEY}&q=${inputData}&image_type=photo&page=${page}&per_page=21`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(page);
    
    if (page === 1) galleryEl.innerHTML = '';
    
    const dataMarkup = data.hits.map(el => `<div class="img-div"><img src="${el.
        webformatURL}" alt="${el.tags}"><a target="_blank" href="${el.pageURL}">Go to origin</a></div>`).join("");

    galleryEl.insertAdjacentHTML("beforeend", dataMarkup);
    if (page >=1) moreBtnEl.style.display = "block";
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchQuery(event.target.value)
})

moreBtnEl.onclick = () => {
    page++;
    searchQuery();
}

