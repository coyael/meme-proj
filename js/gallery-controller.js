'use strict'

function renderGallery(){
    const imgs=getImgs()
    const elGallery=document.querySelector('.gallery-container')
    const strHTML= imgs.map(img=>
        `<div class="gallery-img">
        <img src="${img.url}" onclick="onImg(this,${img.id})" alt="">
        </div>`
    )
    elGallery.innerHTML+=strHTML.join('')
}


function onImg(elImg,imgId){
    const elGallery=document.querySelector('.gallery-container')
    elGallery.style.display='none'
    showCanvas()
    drawImg(elImg,imgId)
    renderMeme()
 }