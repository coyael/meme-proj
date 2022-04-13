'use strict'
let gMeme

function _createMeme(){
gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
    {
    txt: 'I sometimes eat Falafel',
    size: 20,
    align: 'left',
    color: 'red'
    }
    ]
   }
}   
function getMemByImgId(imgId){
    let memeImg=getImgs()
    return memeImg.find(img=>imgId===img.id)
}

