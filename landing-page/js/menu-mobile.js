const linkMenuMobile = document.querySelector('.link-icon-menu')
const menuMobile = document.querySelector('.lista-menu-mobile')
const linkClose = document.querySelector('.link-menu-close')


linkMenuMobile.addEventListener("click", (e)=>{
    e.preventDefault()

    const menuAtivo = document.querySelector('.menu-ativo')

    if(!menuAtivo)
    {
        menuMobile.classList.add('menu-ativo')
    }
})

linkClose.addEventListener('click', (e)=>{

    e.preventDefault()

    const menuAtivo = document.querySelector('.menu-ativo')

    if( menuAtivo )
    {
        menuMobile.classList.remove('menu-ativo')
    }
})
