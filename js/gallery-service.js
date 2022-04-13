'use strict'
let gImgs = []
let gMems
_createImgs()

function getImgs() {
    return gImgs
}

function _createImgs() {
   for(let i=1; i<=18;i++){
    _createImg(i,`img/meme-imgs/${i}.jpg`)
   }
}

function _createImg(id, url) {
    const img = {
        id,
        url,
        keywords:['funny','cat']
    }
    gImgs.unshift(img)
}
