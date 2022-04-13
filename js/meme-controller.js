'use strict'

let gElEditor
let gCtx


function onInit() {
    hideCanvas()
    let gElEditor = document.querySelector('#main-canvas')
    gCtx = gElEditor.getContext('2d')
    // gElEditor.style.display = 'grid'
    renderMeme()
    renderGallery()
}


function renderMeme() {
    const elControler = document.querySelector('.controler-container')
    let strHTML = `
    <form>
        <input type="text" name="txt-meme" placeholder="enter text">
        <img class="up-down-line" src="/img/ICONS/up-and-down-opposite-double-arrows-side-by-side.png" alt="">
        <img class="add-line" src="/img/ICONS/add.png" alt="">
        <img class="trash-line" src="/img/ICONS/trash.png" alt="">
        <img class="increase-font" src="/img/ICONS/increase font - icon.png" alt="">
        <img class="decrease-font" src="/img/ICONS/decrease font - icon.png" alt="">
        <img class="align-line-left" src="/img/ICONS/align-to-left.png" alt="">
        <img class="align-line-center" src="/img/ICONS/center-text-alignment.png" alt="">
        <img class="align-line-right" src="/img/ICONS/align-to-right.png" alt="">
        <input type="color" name="font-color" onchange="getFontColor()">
        <button class="download-meme" onclick="onDownload()">DOWNLOAD</button>
        <button class="share-meme" onclick="onShare()">SHARE</button>
    </form>`
    elControler.innerHTML = strHTML
}

function drawImg(elImg,imgId) {
    let imgMem=getMemByImgId(imgId)
    // console.log(imgMem)
    console.log(elImg)
    let img = new Image();
    img.src = `${imgMem.url}`;
    console.log('g',gCtx)
    img.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElEditor.width, gElEditor.height);
    };
}

function hideCanvas() {
    const elContainer = document.querySelector('.editor-container')
    elContainer.style.display = 'none'
}

function showCanvas() {
    const elContainer = document.querySelector('.editor-container')
    elContainer.style.display = 'block'
}

function onGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'grid'
    gElEditor.style.display = 'none'
    renderGallery()
}