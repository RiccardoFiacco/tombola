import './style.css'
//caricamento numeri nell'html
for(let i = 0; i < 90 ; i++){
    tombolone.innerHTML += 
    `<div id="${i}" class="flex justify-center w-10 rounded-3xl"> ${i} </div>`
}

function randomNumber(){
    return Math.floor(Math.random() * 90)
}

estrai.addEventListener('click', () => {
    let result = randomNumber()
    document.getElementById(result).style.backgroundColor = 'green'
})


