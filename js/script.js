const btn = document.querySelector('.collection__btn--button')
btn.addEventListener('click', () => {
    document.querySelector('.collection__modal').style.display = 'block'
})
const close = document.querySelector('.collection__modal--bg__square--close')
close.addEventListener('click', () => {
    document.querySelector('.collection__modal').style.display = 'none'
})