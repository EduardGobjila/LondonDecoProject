
const button = document.getElementById('close')
const container = document.getElementsByClassName('pop-up-container')[0]


console.log(container)
button.addEventListener('click', () => {
  container.style = 'display: none;'
})

console.log('checking in production')
