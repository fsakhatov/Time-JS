let btn1 = document.querySelector('.btn1');
let obj1 = document.querySelector('.span');

let btn2 = document.querySelector('.btn2');
let obj2 = document.querySelector('.footer');

let clock = document.querySelector('#clock');

let time2 = document.querySelector('#time2');
let time3 = document.querySelector('#time3');
let time4 = document.querySelector('#time4');

let input1 = document.querySelector('#input1');

let h2 = document.querySelector('#h2');
let textp1 = document.querySelector('#textp1');



btn1.addEventListener('click', () =>{
    if( input1.value.length < 10 || input1.value.length > 15){
        input1.style.border = '2px solid red';
    }else {
        input1.style.border = '3px solid aqua';
        h2.innerText = Math.floor(input1.value / 1000)
        setInterval(()=>{
            let date = new Date();
            h2.innerText++;
            clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        },1000)
      obj1.style.display = 'flex'
    }
})

btn2.addEventListener('click', (e) => {
    e.preventDefault()
    obj2.style.display = 'flex';
})
let dates = new Date()

console.log(dates.toUTCString());
setInterval(()=>{
    let date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
},1000)