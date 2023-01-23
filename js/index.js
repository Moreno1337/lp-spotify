const abaDropdown = document.querySelectorAll('.duvidas__dropdown');
const respostas = document.querySelectorAll('.duvidas__resposta');
const flechasExpandir = document.querySelectorAll('.duvidas__flecha');

abaDropdown.forEach( (aba) => {

    aba.addEventListener('click', (event) => {
        if(event.target.dataset.duvida == 'um' || event.target.parentNode.dataset.duvida == 'um') {
            if(!respostas[0].classList.contains('esconde')) {
                respostas[0].classList.add('esconde');
                flechasExpandir[0].style.transform = 'rotate(180deg)';
            } else {
                respostas[0].classList.remove('esconde');
                flechasExpandir[0].style.transform = 'rotate(0deg)';
            }
        } else if(event.target.dataset.duvida == 'dois' || event.target.parentNode.dataset.duvida == 'dois') {
            if(!respostas[1].classList.contains('esconde')) {
                respostas[1].classList.add('esconde');
                flechasExpandir[1].style.transform = 'rotate(180deg)';
            } else {
                respostas[1].classList.remove('esconde');
                flechasExpandir[1].style.transform = 'rotate(0deg)';
            }
        } else if(event.target.dataset.duvida == 'tres' || event.target.parentNode.dataset.duvida == 'tres') {
            if(!respostas[2].classList.contains('esconde')) {
                respostas[2].classList.add('esconde');
                flechasExpandir[2].style.transform = 'rotate(180deg)';
            } else {
                respostas[2].classList.remove('esconde');
                flechasExpandir[2].style.transform = 'rotate(0deg)';
            }
        } else if(event.target.dataset.duvida == 'quatro' || event.target.parentNode.dataset.duvida == 'quatro'){
            if(!respostas[3].classList.contains('esconde')) {
                respostas[3].classList.add('esconde');
                flechasExpandir[3].style.transform = 'rotate(180deg)';
            } else {
                respostas[3].classList.remove('esconde');
                flechasExpandir[3].style.transform = 'rotate(0deg)';
            }
        }
    });
});