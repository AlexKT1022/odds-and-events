const bank = [];
const odds = [];
const evens = [];

const generateNumber = () => {
  return Math.floor(Math.random() * 100);
};

const addNumber = (num) => {
  if (!num) {
    num = generateNumber();
  }

  bank.push(num);

  render();
};

const sortNumber = () => {
  const num = bank.shift();

  if (num % 2 !== 0) {
    odds.push(num);
  } else {
    evens.push(num);
  }

  render();
};

const sortAllNumbers = () => {
  while (bank.length > 0) {
    sortNumber();
  }
};

const InputForm = () => {
  const $inputForm = document.querySelector('.input-form');

  $inputForm.innerHTML = `
    <form>
      <label>Add a number to the bank</label>
      <input type="number" name="input" />
      <button name="add-number" value="add-number">Add Number</button>
      <button name="sort" value="sort">Sort 1</button>
      <button name="sort-all" value="sort-all">Sort All</button>
    </form>
  `;

  $inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const action = e.submitter.value;

    if (action === 'add-number') {
      addNumber(e.target.input.value);
    } else if (action === 'sort') {
      sortNumber();
    } else if (action === 'sort-all') {
      sortAllNumbers();
    } else {
      console.log('huh?');
    }

    console.log(action);
  });
};

const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <div class="input-form"></div>
    <div>
      <h2>Bank</h2>
      <div class="number-section">${bank.join(' ')}</div>
    </div>
    <div>
      <h2>Odds</h2>
      <div class="number-section">${odds.join(' ')}</div>
    </div>
    <div>
      <h2>Evens</h2>
      <div class="number-section">${evens.join(' ')}</div>
    </div>
  `;

  InputForm();
};

render();
