"usestrict"

const search = document.querySelector('.search');
const icon = document.querySelector('.icon');
const clear = document.querySelector('.clear');
const input = document.getElementById('mySearch');

icon.onclick = () => {
    search.classList.toggle('active');
}