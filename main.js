// variaveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  console.log(e.key)
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})


// Funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggScreen()

    screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}


function handleResetClick() {
  toggScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)

}


function toggScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}