let alma=document.querySelector('.alma'),
    sogan=document.querySelector('.sogan'),
    armud=document.querySelector('.armud'),
    sarimsaq=document.querySelector('.sarimsaq'),
    banan=document.querySelector('.banan'),
    nar=document.querySelector('.nar');
let meyve=document.querySelector('.meyve');

let dragItem;
alma.addEventListener('dragstart',function () {
    dragItem=this
})
armud.addEventListener('dragstart',function () {
    dragItem=this
})
banan.addEventListener('dragstart',function () {
    dragItem=this
})
nar.addEventListener('dragstart',function () {
    dragItem=this
})
meyve.addEventListener('dragover',function (e) {
    e.preventDefault()
    
})
meyve.addEventListener('drop',function () {
    meyve.append(dragItem)
    
})
let terevez=document.querySelector('.terevez');
let dragI;
sogan.addEventListener('dragstart',function () {
    dragI=this   
})
sarimsaq.addEventListener('dragstart',function () {
    dragI=this   
})
terevez.addEventListener('dragover',function (e) {
    e.preventDefault()
})
terevez.addEventListener('drop',function () {
    terevez.append(dragI)
    
})
