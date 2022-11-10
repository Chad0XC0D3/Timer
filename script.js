
const first = document.querySelector('#first');
const two = document.querySelector('#timeout-nesting');
const btn = document.querySelector('button');
const countdown = document.querySelector('#countdown');

// 1
setTimeout(()=> {
    const p = document.createElement('p');
    p.innerText = 'Hi';
    first.append(p);    
}, 1000);

// 2
setTimeout(() => {
    const p = document.createElement('p');
    p.innerText = "One"; 
    two.append(p);
    setTimeout(() =>{
        const p = document.createElement('p');
        p.innerText = "two"; 
        two.append(p);
    }, 1000);
}, 2000);

// 3
let i = 0;
let time = setInterval(() =>{
    i+=1;
    console.log(i);
}, 1000);


// 4
btn.addEventListener('click', () =>{
    clearInterval(time);
});


// 5
const p = document.createElement('p');
let num = 120;

const count = setInterval(() => {
    if(num > 0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        if(seconds == 0){
            p.innerText = `${minutes}:${seconds}0`;
        } else{
            p.innerText = `${minutes}:${seconds}`;
        }
        
        countdown.append(p);
    } else if(seconds < 10){
        p.innerText = `${minutes}:0${seconds}`;
    }
    else {
        clearInterval(count);
        p.innerText = 'time up';
        countdown.append(p);
    }
    num--;
}, 1000)