// VARIÁVEIS DE CONTROLE DE INTERFACE

let yourVote = document.querySelector('.division-1-1 span');
let politicalOffice = document.querySelector('.division-1-2 span');
let generalDesc = document.querySelector('.division-1-4');
let generalWarning = document.querySelector('.division-2');
let lateral = document.querySelector('.division-1-right');
let numbers = document.querySelector('.division-1-3');

// VARIÁVEIS DE CONTROLE DE AMBIENTE

let actualStep = 0;
let number = '';

function startStep() {

    let step = steps[actualStep];

    let numberHtml = '';

    numberHtml = '';

    for(let i=0; i< step.numbers;i++) {
        if (i === 0) {
            numberHtml += '<div class="number flash"></div>';
        } else {
        numberHtml += '<div class="number"></div>';
    }

    yourVote.style.display = 'none';
    politicalOffice.innerHTML = step.title;
    generalDesc.innerHTML = '';
    generalWarning.style.display = 'none';
    lateral.innerHTML = '';
    numbers.innerHTML = numberHtml
}

function refreshInterface() {

}

function click(n) {
    let numberElement = document.querySelector('.number.flash');

    if(numberElement !== null) {
        numberElement.innerHTML = n;
        number = `${number}${n}`;

        numberElement.classList.remove('flash');

        if (numberElement.nextElementSibling !== null) {
            numberElement.nextElementSibling.classList.add('flash');
        } else {

        refreshInterface();
    }
}

function white() {

}

function clear() {

}

function confirm() {

}

startStep()