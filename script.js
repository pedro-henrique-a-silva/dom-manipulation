// Seu código aqui

// Requisito 1

const mudaTagP = () => {
  const tagP = document.querySelector('.center-content p:nth-of-type(2)');
  tagP.innerHTML = 'Daqui a 2 anos me vejo como um Dev Casca grossa :)';
};

// Requisito 2

const mudaFundoMain = () => {
  const tagMain = document.querySelector('.main-content');
  tagMain.style.backgroundColor = 'rgb(76, 164, 109)';
};

// Requisito 3

const mudaFundoCentro = () => {
  const sectionCenter = document.querySelector('.center-content');
  sectionCenter.style.backgroundColor = 'white';
};

// Requisito 4

const mudaTitulo = () => {
  const titulo = document.querySelector('.title');
  titulo.innerHTML = 'Desafio - JavaScript';
};

// Requisito 5

const paragrafoUppercase = () => {
  const paragrafo = document.querySelector('p');
  paragrafo.innerText = paragrafo.innerText.toUpperCase();
}

// Requisito 6
const moveParagraphToFooter = () => {
  const paragraphs = document.querySelectorAll('.center-content p');
  const paragraphFooter = document.querySelector('footer p');

  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphFooter.innerText = `${paragraphFooter.innerText} ${paragraphs[index].innerText}`;
  }
};

mudaTagP();
mudaFundoMain();
mudaFundoCentro();
mudaTitulo();
paragrafoUppercase();
moveParagraphToFooter();
