console.log('connected');

const btn = document.getElementsByClassName('btn')[0];
const modal = document.getElementsByClassName('modal')[0];
const cross = document.getElementsByClassName('cross')[0];
const body = document.body;


btn.addEventListener('click', function(){
    console.log('clicked');
    modal.classList.remove('hide')
    body.classList.add('overlay')
}
)

cross.addEventListener('click', function(){
    modal.classList.add('hide')
    body.classList.remove('overlay')
})
document.addEventListener('keydown', function(e){
   if(e.keyCode==27){
    modal.classList.add('hide')
    body.classList.remove('overlay')
   }
})