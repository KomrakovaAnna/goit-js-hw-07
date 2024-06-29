function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  //   boxes.innerHTML = "";
  let template = '';
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i++) {
    template += `
        <div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>
        `;
    width += 10;
    height += 10;
  }

  document.querySelector('#boxes').innerHTML = template;
}

createBtn.addEventListener('click', createBoxesHandle);

function createBoxesHandle() {
  const amount = input.value;

  if (amount < 1 || amount > 100)
    return alert('Please, enter a number between 1 and 100');

  createBoxes(amount);
}

destroyBtn.addEventListener('click', destroyBoxesHandle);

function destroyBoxesHandle() {
  boxes.innerHTML = '';
}
