let number = 3;
let attemptsElement = document.getElementById("attempts")
attempts = 0;
let pointsElement = document.getElementById("points")
points = 0;
let resultDisplay = document.getElementById("result")

let displayNum = document.getElementById("displayNum")
let btnEasy = document.getElementById("btn-easy").onclick = function(){
    displayNum.textContent = "3!"
    number = 3;
}
let btnNormal = document.getElementById("btn-normal").onclick = function(){
    displayNum.textContent = "5!"
    number = 5;
}
let btnHard = document.getElementById("btn-hard").onclick = function(){
    displayNum.textContent = "10!"
    number = 10;
}
document.getElementById("spin").onclick = spin;

function spin(){
    let numArray = [];

    switch(number){
        case 3:
            spinEasy(numArray)
        break
        case 5:

            spinNormal(numArray)
        break
        case 10:
            spinHard(numArray)
        break
        default:
            resultDisplay.textContent = `Error`
    }

}
function spinEasy(numArray){
    for(let i = 0; i < 3; i++){       
        const random = Math.floor(Math.random() * (3) +1)
        numArray.push(random)
    }
    if(numArray[0] === numArray[1] && numArray[1] === numArray[2]){
        resultDisplay.classList.add("win")
        resultDisplay.textContent = `${numArray[0]}, ${numArray[1]}, ${numArray[2]}`
        points++
        pointsElement.textContent = points;
        attempts++
        attemptsElement.textContent = attempts;
        winPoint(pointsElement)
    } else {
        resultDisplay.classList.remove("win")
        resultDisplay.textContent = `${numArray[0]}, ${numArray[1]}, ${numArray[2]}`
        attempts++
        attemptsElement.textContent = attempts;
    }  
}
function spinNormal(numArray){
    for(let i = 0; i < 3; i++){
        const random = Math.floor(Math.random() * (5) +1)
        numArray.push(random)
    }
    if(numArray[0] === numArray[1] && numArray[1] === numArray[2]){
        resultDisplay.classList.add("win")
        resultDisplay.textContent = `${numArray[0]}, ${numArray[1]}, ${numArray[2]}`
        points++;
        pointsElement.textContent = points;
        attempts++
        attemptsElement.textContent = attempts;
        if(attempts < 10){
            window.alert("on the first try!")
        }
    } else {
        resultDisplay.classList.remove("win")
        resultDisplay.textContent = `${numArray[0]}, ${numArray[1]}, ${numArray[2]}`
        attempts++
        attemptsElement.textContent = attempts;
    }
}
function spinHard(numArray){
    for(let i = 0; i < 3; i++){
        const random = Math.floor(Math.random() * (10) +1)
        numArray.push(random)
    }
    if(numArray[0] === numArray[1] && numArray[1] === numArray[2]){
        resultDisplay.classList.add("win")
        resultDisplay.textContent = `${numArray[0]}, ${numArray[1]}, ${numArray[2]}`
        points++;
        pointsElement.textContent = points;
        attempts++
        attemptsElement.textContent = attempts;
    } else {
        resultDisplay.classList.remove("win")
        resultDisplay.textContent = `${numArray[0]}, ${numArray[1]}, ${numArray[2]}`
        attempts++
        attemptsElement.textContent = attempts;
    }
}
const buttons = document.querySelectorAll(".buttons")
buttons[0].classList.add("ativo")
buttons.forEach(button => {
    button.addEventListener("click", event => {
        buttons.forEach(btn => btn.classList.remove("ativo"))
        event.target.classList.add("ativo")
        points = 0;
        pointsElement.textContent = points;
        attempts = 0;
        attemptsElement.textContent = attempts;
    })
})

function winPoint(number){
    number.classList.add("winAnim")
    setTimeout(() => {
        number.classList.remove("winAnim")
    }, 1000);
}