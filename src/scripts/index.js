import 'swiper/swiper-bundle.css'
document.querySelector('.header-nav__theme').addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark-theme')
})

document.querySelector('.header-nav__burger').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('header__nav--open')
})
