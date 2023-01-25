const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu__item");

function scrollingMenu() {
	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute("id");
		}
	});
	menuItems.forEach((li) => {
		li.classList.remove("menu__item--focus");
		if (li.classList.contains(current)) {
			li.classList.add("menu__item--focus");
		}
	});
}

window.addEventListener("DOMContentLoaded", scrollingMenu);
window.addEventListener("scroll", scrollingMenu);
