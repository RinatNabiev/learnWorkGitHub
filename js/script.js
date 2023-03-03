// Найти кнопку в HTML документе
let button = document.querySelector('#btn');
// Найти модальное окно в документе
let modal = document.querySelector('#modal');

// Навесить кнопку события клика
button.addEventListener('click', () => {
// При клике кнопки должно появиться модальное окно с формой входа
modal.style.display = 'block'
});

// // Найти элемент закрытия модалки
// let close = document.querySelector('#close');

// // Навесить на элемент закрытия событие клика
// close.addEventListener('click', () => {
// // При клике на элемент "закрыть" модалки, окно закрывается
// modal.style.display = 'none';
// });

// Найти в модальном окне кнопку
let closeButton = document.querySelector('.logo-modal');

closeButton.addEventListener('click', close);

function close() {
	modal.classList.remove('block');
};

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		close();
 	}
 });
