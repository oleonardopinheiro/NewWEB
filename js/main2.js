document.addEventListener('DOMContentLoaded', function () {
  const nave = document.querySelector('#header nav')
  const toggle = document.querySelectorAll('nav .toggle')
  for (const element of toggle) {
    element.addEventListener('click', function () {
      nave.classList.toggle('show')
    })
  }
  
  /* quando clicar em um item fechar o menu*/
  
  const links = document.querySelectorAll('nav ul li a')
  
  for (const link of links) {
    link.addEventListener('click', function () {
      nave.classList.remove('show')
    })
  }
  
  /* scroll da pagina */
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  
  window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // menor que a altura do header
      header.classList.remove('scroll')
    }
  })


});

