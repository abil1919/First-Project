// function hello (){
//     alert('привет');
// }
// setTimeout (hello, 1000);
// hello();


const redDiv = document.getElementById('cube')


const step = document.getElementById('step')
const spin=document.getElementById('spin') 
let left = 0
let mtop = 0
let rotate = 0
step.addEventListener('click',()=>{
setInterval(() =>{
    redDiv.style.fransform='rotate'(+ rotate + 'dag')
    rotate+=15
},30
})
    redDiv.style.transform = 'rotate(' + rotate + 'deg)'
    if (left == 0 && mtop <= 550 && mtop > 0) {
        mtop = mtop - 10
        redDiv.style.top = mtop + 'px'
    }
    else if (left <= 650 && mtop == 550) {
        left = left - 10
        redDiv.style.left = left + 'px'
    }
    else if (mtop >= 0 && mtop <= 540 && left >= 640) {
        redDiv.style.top = mtop + 'px'
        mtop = mtop + 10
    }
    else if (left >= 0 && mtop == 0 && left <= 650) {
        redDiv.style.left = left + 'px'
        left = left + 10
    }
    rotate += 15
}, 30)





























