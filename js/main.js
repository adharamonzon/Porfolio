let works = [];

const getData = () => {
  return fetch('./data/data.json')
    .then((response) => response.json())
    .then((data) => {
      works = data;
      paintWorks();
    });
};

const list = document.querySelector('.works-list');

const trigerModal = document.querySelectorAll('.js-workBtn');

const paintWorks = () => {
  let listCode = '';
  for (work of works) {
    listCode += `<li id=${work.id} class="work-list-item">`;
    listCode += `<h4 class="work-list-item-name uppercase">${work.name}</h4>`;
    listCode += `<h6 class="work-list-item-subtitle">${work.subtitle}</h6>`;
    listCode += `<button id=${work.id} class="work-list-item-btn js-workBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Pincha aquí</button>`;
    listCode += `</li>`;
  }
  list.innerHTML = listCode;
  showModal();
};
const modalWindow = document.querySelector('.modal-content');
const showModal = () => {
  const modalTriger = document.querySelectorAll('.js-workBtn');

  const handelModal = (ev) => {
    modalCard = '';
    const btnTriger = parseInt(ev.currentTarget.id);
    for (const work of works) {
      console.log(works);
      if (btnTriger === work.id) {
        modalCard += `<div class="modal-header" id=${work.id}>`;
        modalCard += `<h5 class="modal-title" id="exampleModalLabel">${work.name}</h5>`;
        modalCard += `</div>`;
        modalCard += `<div modal-body> `;
        modalCard += `<p class="modal-description">${work.description}</p>`;
        modalCard += '</div>';
        modalCard += '<div class="modal-footer">';
        modalCard += `<ul class="modal-languajes">`;
        for (const languaje of work.languajes) {
          modalCard += `<li class="modal-languajes-item">`;
          modalCard += `<p>${languaje}</p>`;
          modalCard += '</li>';
        }
        modalCard += '</ul>';
        modalCard += '<div class="modalBtn-container">';
        modalCard += `<a href=${work.web} target="_blank" class="btn-modal">Ir a la web</a>`;
        modalCard += `<a href=${work.codeUrl} target="_blank" class="btn-modal">Ir al código</a>`;
        modalCard += '</div>';
        modalCard += `</div>`;
      }
    }
    modalWindow.innerHTML = modalCard;
  };
  modalTriger.forEach((item) => item.addEventListener('click', handelModal));
};
getData();
