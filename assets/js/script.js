// Number of Flips
let heads = 0
let tails = 0

// Total of flips
let headsCol = document.getElementById('heads')
let tailsCol = document.getElementById('tails')
let headsPerCol = document.getElementById('heads-percent')
let tailsPerCol = document.getElementById('tails-percent')

// Event listeners for flip and clear buttons 

let flipButton = document.getElementById('flip')
let clearButton = document.getElementById('clear')
let total = 0
let pennyImage = document.querySelector('img')
let statusMessage = document.querySelector('.message-container')

flipButton.addEventListener('click', function(){
    const randomResult = Math.round(Math.random() * 1)

if(randomResult === 0){
    pennyImage.src = "./assets/images/penny-heads.jpg"
    pennyImage.alt = "A picture of tails on a penny"
    statusMessage.textContent = "You flipped tails"
    tails++
    tailsCol.textContent = tails;
} else {
    pennyImage.src = "./assets/images/penny-heads.jpg"
    pennyImage.alt = "A picture of heads on a penny"
    statusMessage.textContent = "You flipped heads"
    heads++
}

tailsPerCol.textContent = Math.round(tails / (heads + tails) * 100) + '%';
headsPerCOl.textContent = Math.roung(heads / (heads + tails) * 100) + '%';


// Update display of each table 
clearButton.addEventListener('click', function(){
    heads = 0
    tails = 0
    headsCol.textContent = heads;
    tailsCol.textContent = tails;
    tailsPerCol.textContent = 0 + '%';
    headsPerCOl.textContent = 0 + '%';
    statusMessage.textContent = "Lets get rolling"
    pennyImage.setAttribute('src', "./assets/images/penny-heads.jpg");
    pennyImage.setAttribute('alt', "A picture of heads on a penny")
})
})
