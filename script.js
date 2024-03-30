let btn1 = document.querySelector('.btn1');
let obj1 = document.querySelector('.span');

let objp2 = document.querySelector('#objp2');
let objp3 = document.querySelector('#objp3');
let unixTime = document.querySelector('#unixtime')

let btn2 = document.querySelector('.btn2');
let obj2 = document.querySelector('.footer');

let clock = document.querySelector('#clock');

let time2 = document.querySelector('#time2');
let time3 = document.querySelector('#time3');
let time4 = document.querySelector('#time4');

let input1 = document.querySelector('#input1');

let h2 = document.querySelector('#h2');
let textp1 = document.querySelector('#textp1');

let getYear = document.querySelector('#getyear');
let getMonth = document.querySelector('#getmonth');
let getDay = document.querySelector('#getday');
let getHour = document.querySelector('#getyear');
let getMinut = document.querySelector('#getminut');
let getSecond = document.querySelector('#getsecond');

let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');





btn1.addEventListener('click', () => {
    if( input1.value.length < 10 || input1.value.length > 15){
        input1.style.border = '2px solid red';
    }else {
        input1.style.border = '3px solid aqua';
        h2.innerText = Math.floor(input1.value / 1000)
        setInterval(()=>{
            
            let date = new Date();
            h2.innerText++;
            clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            time2.innerText = new Date(input1.value*1000).toGMTString();
            time3.innerText = new Date(input1.value*1000)
        },1000)
      obj1.style.display = 'flex'
    }
})

btn2.addEventListener('click', (e) => {
    e.preventDefault()
    obj2.style.display = 'flex';
    objp2.innerText = new Date(getYear.value,getMonth.value,getDay.value,getHour.value,getMinut.value,getSecond.value).toGMTString()
    objp3.innerText = new Date(getYear.value,getMonth.value,getDay.value,getHour.value,getMinut.value,getSecond.value)
   unixTime.innerText = new Date().getTime(getYear.value,getMonth.value,getDay.value,getHour.value,getMinut.value,getSecond.value)
 console.log(unixTime.innerText);
})






