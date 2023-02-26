
window.onload = function () {
    if (localStorage.getItem('itemCounter') != undefined) {
        document.querySelector('.counterVal').textContent = JSON.parse(localStorage.getItem('itemCounter'))
    }
}

document.addEventListener('click', event => {
    let countValue = document.querySelector('.counterVal');
        if (event.target.className === 'btnCountPlus') {
            countValue.textContent++;
        }
        if ((event.target.className === 'btnCountMinus') && (countValue.textContent > 0)) {
            countValue.textContent--;
        };    
    localStorage.setItem('itemCounter', JSON.stringify(countValue.textContent));
});

