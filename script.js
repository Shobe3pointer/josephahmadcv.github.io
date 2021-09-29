const answerOneC = document.getElementById("btn-one")
const answerTwoC = document.getElementById("btn-two")
const answerThreeC = document.getElementById("btn-three")
const answerButtons = document.getElementById("answer-buttons")

const answerParagraphOne = document.getElementById("answerones")
const answerParagraphTwo = document.getElementById("answertwos")
const answerParagraphThree = document.getElementById("answerthrees")
const buttonTryAgain = document.getElementById("try-again")


answerOneC.addEventListener('click', answerOne)
answerTwoC.addEventListener('click', answerTwo)
answerThreeC.addEventListener('click', answerThree)
buttonTryAgain.addEventListener('click', tryAgain)



function answerOne() {
    console.log("answeronepara")
    answerButtons.classList.add('hide')
    answerParagraphOne.classList.remove('hide')
    buttonTryAgain.classList.remove('hide')
    
}

function answerTwo() {
    console.log("answertwopara")
    answerButtons.classList.add('hide')
    answerParagraphTwo.classList.remove('hide')
    buttonTryAgain.classList.remove('hide')
}

function answerThree() {
    console.log("answerthreepara")
    answerButtons.classList.add('hide')
    answerParagraphThree.classList.remove('hide')
    buttonTryAgain.classList.remove('hide')
}

function tryAgain(){
    console.log("tryagain")
    answerButtons.classList.remove('hide')
    buttonTryAgain.classList.add('hide')
    answerParagraphOne.classList.add('hide')
    answerParagraphTwo.classList.add('hide')
    answerParagraphThree.classList.add('hide')

}