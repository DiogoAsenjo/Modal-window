'use strict';

//Aqui, ao contrário do primeiro projeto que ficava escrevendo document.querySelector(`.xxx`) todas as vezes, já crianças variáveis pra todos os elementos que iremos manipural do arquivo html.
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`); //Ao invés de apenas querySelector, aqui também tem o All, já que no arquivo HTML temos 3 classes show-modal (uma para cada botão). Gera uma nodelist, que é parecido com um array.

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
} //Apenas um exemplo de como o nodelist funciona de forma semelhante a um array.

//Usamos esse for loop para fazer o evento click funcionar em todos os botões. Queremos usar isso para abrir a modal window.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, function () {
    console.log(`Button clicked`);
    modal.classList.remove(`hidden`); //Nessas duas linhas, estamos basicamente removendo a condição hidden da classe. Conforme pode ser visto no documento HTML, o texto da modal window já está lá, mas está escondido, nesse caso queremos que ele apreca quando clicado, por isso a remoção da condição de escondido.
    overlay.classList.remove(`hidden`);
  });
}

// btnCloseModal.addEventListener(`click`, function () {
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// }); //Aqui nós estamos fechando a modal window clicando no X

// overlay.addEventListener(`click`, function () {
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// }); //Aqui estamos fechando clicando no overlay.

//Ao invés de digitar a mesma coisa duas vezes, é mais simples fazer uma função de fechar. Abaixo temos o mesmo resultado mas um código bem mais limpo.

function closeModal() {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
}

btnCloseModal.addEventListener(`click`, closeModal); //Atenção para não chamar a função aqui (colocando os () no fim), se não a função será executada assim que o programa executar, nó só queremos que seja executada quando houver o click!
overlay.addEventListener(`click`, closeModal);
