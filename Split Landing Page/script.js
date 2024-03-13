const left = document.querySelector('.left')
const right = document.querySelector('.right')
 const container = document.querySelector('.container')

 left.addEventlistener('mouseenter', () => container.classList.add ('hover-left'))
 left.addEventlistener('mouseleave', () => container.classList.remove ('hover-left'))

 right.addEventlistener('mouseenter', () => container.classList.add ('hover-right'))
 right.addEventlistener('mouseleave', () => container.classList.remove ('hover-right'))
