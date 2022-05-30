// VARIÁVEIS DE CONTROLE DE INTERFACE

let yourVote = document.querySelector('.division-1-1 span');
let politicalOffice = document.querySelector('.division-1-2 span');
let generalDesc = document.querySelector('.division-1-4');
let generalWarning = document.querySelector('.division-2');
let lateral = document.querySelector('.division-1-right');
let numbers = document.querySelector('.division-1-3');

// VARIÁVEIS DE CONTROLE DE AMBIENTE

let actualStep = 0;  // Etapa atual
let number = ''; // Os números serão preenchidos nessa variável
let whiteVote = false;
let votes = [];

// VARIÁVEIS DE AMBIENTE FINALIZADAS

function startStep() { //ETAPA DE VOTAÇÃO ABERTA

    let step = steps[actualStep];

    let numberHtml = '';
    number = '';
    whiteVote = false;


    for(let i=0;i<step.numbers;i++) {
        if (i === 0) {
            numberHtml += '<div class="number flash"></div>';
            } else {
            numberHtml += '<div class="number"></div>';
     }
}

    yourVote.style.display = 'none';
    politicalOffice.innerHTML = step.title;
    generalDesc.innerHTML = '';
    generalWarning.style.display = 'none';
    lateral.innerHTML = '';
    numbers.innerHTML = numberHtml;

}       // ETAPA DE VOTAÇÃO FECHADA

function refreshInterface() {
    let step = steps[actualStep]
        let candidate = step.candidates.filter((item)=>{

            if (item.number === number) {
                return true;
            } else  {
                return false;
            }
            
        });
        
        if (candidate.length > 0) {
            candidate = candidate[0];
            yourVote.style.display = 'block';
            generalWarning.style.display = 'block';
            generalDesc.innerHTML = `Nome: ${candidate.name}<br/>Partido:${candidate.camelCase}`;
            
            let photosHtml = '';
            for(let i in candidate.photos) {
                if(candidate.photos[i].small) {
                photosHtml += `<div class="division-1-image small"><img src="images/${candidate.photos[i].url}" "alt=""/>${candidate.photos[i].subtitle}</div>`;    
            } else {
                photosHtml += `<div class="division-1-image"><img src="images/${candidate.photos[i].url}" "alt=""/>${candidate.photos[i].subtitle}</div>`;    
            } 
        }
            lateral.innerHTML = photosHtml;
        } else {
            yourVote.style.display = 'block';
            generalWarning.style.display = 'block';
            generalDesc.innerHTML = '<div class="large-warning flash">VOTO NULO</div>';
        }
}

    function chooseNumber(n) {
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
}

function white() {
        number = '';
        whiteVote = true;
        yourVote.style.display = 'block';
        generalWarning.style.display = 'block';
        numbers.innerHTML = '';
        generalDesc.innerHTML = '<div class="large-warning flash">VOTO EM BRANCO</div>';
        lateral.innerHTML= '';
}

function clearVote() {
    startStep();
}

function confirmVote() {
    let step = steps[actualStep];

    let voteConfirmed = false;

    if(whiteVote === true) { // O botão confirmar só funciona se o botão votar em branco estiver verdadeiro "true"
       voteConfirmed = true;
       votes.push({
           step: steps[actualStep].title,
           vote: 'whiteVote'
       });
    } else if(number.length === step.numbers) {
       voteConfirmed = true;
       votes.push({
        step: steps[actualStep].title,
        vote: number
    });
 }
  if (voteConfirmed) {
        actualStep++;
        if (steps[actualStep] !== undefined) {
            startStep()
        } else {
            document.querySelector('.screen').innerHTML = '<div class="giant-warning flash">FIM</div>'
        }
    }
}

startStep()



