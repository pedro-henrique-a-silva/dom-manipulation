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

mudaTagP();
mudaFundoMain();
mudaFundoCentro();
