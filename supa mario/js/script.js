const mario = document.querySelector('.mario-gif');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('pulo'); 
    setTimeout(() => {
        mario.classList.remove('pulo'); 
    }, 500);
};

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/pahblo.jpeg';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    } else if (pipePosition <= -80) {
       
        
    }
}, 10);

document.addEventListener('keydown', jump); 

