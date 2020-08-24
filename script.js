console.log("Entrei")
let input = document.querySelector("input")
console.log(input)

let h2 = document.querySelector("h2")
console.log(h2)

let button = document.querySelector("button")
console.log(button)

function cliquei(){
    console.log("cliquei")
    event.preventDefault()
    h2.innerHTML = input.value
}