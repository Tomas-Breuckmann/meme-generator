// const fire = document.getElementById('fire')
const memeImageContainer = document.getElementById('meme-image-container')
const meme1 = document.getElementById('meme-1')
const meme2 = document.getElementById('meme-2')
const meme3 = document.getElementById('meme-3')
const meme4 = document.getElementById('meme-4')

function adicionaImagem(event){
    document.getElementById('meme-image').src = event.target.src
}
meme1.addEventListener('click',adicionaImagem)
meme2.addEventListener('click',adicionaImagem)
meme3.addEventListener('click',adicionaImagem)
meme4.addEventListener('click',adicionaImagem)

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

