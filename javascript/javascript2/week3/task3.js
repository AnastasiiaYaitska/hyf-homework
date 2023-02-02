


const refs = {
    input: document.querySelector('[data-input=value]'),
    button: document.querySelector('.btn-start'),
    outputS: document.querySelector('.outputS'),
    outputL: document.querySelector('.outputL'),
    timeOver: document.querySelector('.timer-over'),
    divS: document.querySelector('.gamer-s'),
    divL: document.querySelector('.gamer-l'),
    
}
let inputValue = 0;
let counterS = 0;
let counterL = 0;

refs.button.addEventListener('click', onClickBtnStart);
document.addEventListener('keyup', onKeyupCounter)



function onClickBtnStart(event) {
    inputValue = refs.input.value;
    if (inputValue === "") {
       return refs.timeOver.textContent = 'Set timeout'
    }
    const timeoutId = setTimeout( defineWinner,
        inputValue * 1000)
        
        if (inputValue !== "") {
         return refs.timeOver.textContent = ''
     }
}

function defineWinner() {
       if (counterL === counterS) {
           alert('A draw')
       }  
       if (counterS > counterL) {
           renderCanvasEl(refs.divS);
            setConfetti() 
       }
       if (counterL > counterS) {
           renderCanvasEl(refs.divL);
           setConfetti() 
       }

    refs.timeOver.textContent = 'Game over';
    document.removeEventListener('keyup', onKeyupCounter);
}


function onKeyupCounter(event) {
   
    if (!event.code === 'KeyS' & !event.code === 'KeyL') {
        alert('Press key L and key S')
    }
    if (event.code === 'KeyS') {
        counterS += 1;
        refs.outputS.textContent = counterS;
    }
    if (event.code === 'KeyL') {
        counterL += 1;
        refs.outputL.textContent = counterL;
    }
    if (refs.outputL.textContent === "" & refs.outputS.textContent === "") {
        alert ('Need press key S and key L')
    }
}


function setConfetti() {
    const confettiSettings = {
        target: 'my-canvas',
        size: 1.8,
        width: 300,
        height: 150
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}


function renderCanvasEl(element) {
    const canvas = `<canvas id="my-canvas"></canvas>`;
   element.insertAdjacentHTML('afterbegin', canvas)
}