function memeText(){
    let texto=document.getElementById('text-input')
    let containerText = document.getElementById('meme-text')
    containerText.innerText=texto.value
}
memeText()