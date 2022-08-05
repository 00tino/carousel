// Grab DOM elements
const images = document.querySelector(".images")
const imagesCollection = images.querySelectorAll(".image")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

// Utility Vars
let index = 0


// Set interval
let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 2000)
}

function moveCarousel() {
    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }
 
    images.style.transform = `translateX(-${index * 720}px)`
}



// Nav buttons
function prevSlide () {
    index--
    resetInterval()
    moveCarousel()
}

function nextSlide () {
    index++
    resetInterval()
    moveCarousel()
}