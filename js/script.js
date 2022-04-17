const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

const link = document.querySelectorAll('.menu__link');
/*function prevention(event)
{
    event.preventDefault();
};

link.forEach(linkItem => {
    addEventListener("click", prevention);
});*/

/*--------------------------------*/

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
// const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');

const item1 = document.querySelector('.about');
const getItemTopCoord1 = item1.getBoundingClientRect().top;
const getItemTopDocumentCoord1 = getItemTopCoord1 + window.pageYOffset-50;


const item2 = document.querySelector('.photo');
const getItemTopCoord2 = item2.getBoundingClientRect().top;
const getItemTopDocumentCoord2 = getItemTopCoord2 + window.pageYOffset-50;


/*const item3 = document.querySelector('.contacts');
const getItemTopCoord3 = item3.getBoundingClientRect().top;
const getItemTopDocumentCoord3 = getItemTopCoord3 + window.pageYOffset-50;*/

/*console.log(link1);
console.log(getItemTopDocumentCoord3);*/

link1.addEventListener('click', function (e){setScrollToOptions(0, getItemTopDocumentCoord1) });
link2.addEventListener('click', function (e){setScrollToOptions(0, getItemTopDocumentCoord2) });
// link3.addEventListener('click', function (e){setScrollToOptions(0, getItemTopDocumentCoord3) });
link4.addEventListener('click', function (e){setScrollToOptions(0, 0) });

function setScrollToOptions(a, b) {
    console.log('Хуй');
	window.scrollTo({
		top: b,
        left: a,
		behavior: "smooth",
	});
	menuBody.classList.remove('_active');
};



/*
const button = document.querySelectorAll('.button');

function showConsole() {
	console.log('Ура!');
}
button.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsole);
});*/
/*const link1 = document.getElementsByName('l1');
link1.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});
const link2 = document.getElementsByName('l2');
link2.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});
const link3 = document.getElementsByName('l3');
link3.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});
const link4 = document.getElementsByName('l4');
link4.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});*/