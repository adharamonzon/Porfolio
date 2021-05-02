let works = [];

const getData = () => {
  return fetch('../data/data.json')
    .then((response) => response.json())
    .then((data) => {
      works = data;
      paintWorks();
    });
};

const list = document.querySelector('.works-list');

const paintWorks = () => {
  let listCode = '';
  for (work of works) {
    listCode += `<li id=${work.id} class="work-list-item">`;
    listCode += `<h4 class="work-list-item-name uppercase">${work.name}</h4>`;
    listCode += `<h6 class="work-list-item-subtitle">${work.subtitle}</h6>`;
    listCode += '<a class="work-list-item-btn">Know more</a>';
    listCode += `</li>`;
  }
  list.innerHTML = listCode;
};

getData();
