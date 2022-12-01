const navbarList = document.querySelector('.navbar__list')
const burgerBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.navbar__item')

const showMenu = () => {
    navbarList.classList.toggle('show-menu')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navbarList.classList.remove('show-menu')
          
        })
    })

}

burgerBtn.addEventListener('click', showMenu)