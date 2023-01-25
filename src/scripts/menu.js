const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu__item"); /* navLi */

window.addEventListener("scroll", () => {
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
});

console.log(sections, menuItems);
