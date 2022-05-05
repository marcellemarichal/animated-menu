const container = document.querySelector('.container')
const allLists = document.querySelectorAll('li')

allLists.forEach((li, index) => {
    
    li.addEventListener('click', e => {
        container.querySelector('.active-list').classList.remove('active-list')
        li.classList.add('active-list')

        const indicator = document.querySelector('.selector')
        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })

})