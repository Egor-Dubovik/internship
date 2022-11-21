//arrow down------------------------------------------
// function scrollTo(event) {
// 	window.scroll({
// 		left: 0,
// 		top: event.offsetTop - 0,
// 		behavior: 'smooth'
// 	})
// };
// const arrowDown = document.querySelector('.btn-down');
// const blockTraditions = document.querySelector('.aa');

// arrowDown.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	scrollTo(blockTraditions);
// });
//-----------------------------------------------------------------------


const menuBody = document.querySelector(".menu__body");
const iconBurger = document.querySelector(".menu__icon");


function closeMenu(arr) {
	arr.forEach(el => el.classList.remove("active"));
}

function openMenu(...arr) {
	arr.forEach(el => el.classList.toggle("active"));
	document.body.classList.toggle("lock");
}

const switchMenu = () => {
	console.log(11);
	iconBurger.addEventListener("click", () => {
		openMenu.apply(this, [menuBody, iconBurger]);
	});

	menuBody.addEventListener("click", (e) => {
		if (e.target.classList.contains("menu__link")) {
			closeMenu([menuBody, iconBurger]);
			document.body.classList.remove("lock");
		}
	});

	document.addEventListener("mousedown", (e) => {
		if (!e.target.closest(".menu") && !e.target.closest(".info-popap__content")) {
			closeMenu([menuBody, iconBurger]);
			document.body.classList.remove("lock");
		}
	});
}

switchMenu();