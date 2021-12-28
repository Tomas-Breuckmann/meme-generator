const fire = document.getElementById('fire')
const memeImageContainer = document.getElementById('meme-image-container')

function memeText(){
    let texto=document.getElementById('text-input')
    let containerText = document.getElementById('meme-text')
    containerText.innerText=texto.value
}

function bordaFire(){
    memeImageContainer.style.border='3px dashed red'
}
function bordaWater(){
    memeImageContainer.style.border='5px double blue'
}
function bordaEarth(){
    memeImageContainer.style.border='6px groove green'
}
