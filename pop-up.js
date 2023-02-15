
const button = document.getElementById('close')
const container = document.getElementsByClassName('pop-up-container')[0]

counter = 0
button.addEventListener('click', () => {
  container.style = 'display: none;'
  counter += 1
})


window.addEventListener('scroll', () => {
  if (window.pageYOffset > '1100') {
    if (counter == 0)  {
      container.style = 'display: block;'
    } else {
      container.style = 'display: none;'
    }
  }
  // console.log(window.pageYOffset)
})
