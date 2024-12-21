const btn = document.getElementById('active')

btn.addEventListener('click', () => {
    btn.classList.add('active')
    btn.classList.remove('header__size-button')
})