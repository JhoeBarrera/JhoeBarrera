const inputContainer = document.querySelector(".input-container");
const textareaContainer = document.querySelector(".textarea-container");
const inputEmail = document.querySelector(".form__email");
const textarea = document.querySelector(".form__message");

let currentInputClick = 0;
let currentTextareaClick = 0;

function activateInputContainer() {
	inputContainer.classList.add("input-container--active");
}
function deactivateInputContainer() {
	inputContainer.classList.remove("input-container--active");
}

function activateTextareaContainer() {
	textareaContainer.classList.add("textarea-container--active");
}
function deactivateTextareaContainer() {
	textareaContainer.classList.remove("textarea-container--active");
}

inputEmail.addEventListener("click", () => {
	currentInputClick = currentInputClick + 1;
	if (currentInputClick % 2 != 0 || inputEmail.value != "") {
		activateInputContainer();
	} else {
		deactivateInputContainer();
		inputEmail.blur();
	}
});

textarea.addEventListener("click", () => {
	currentTextareaClick = currentTextareaClick + 1;
	if (currentTextareaClick % 2 != 0 || textarea.value != "") {
		activateTextareaContainer();
	} else {
		deactivateTextareaContainer();
		textarea.blur();
	}
});

document.documentElement.addEventListener("click", (e) => {
	if (e.target != inputEmail && inputEmail.value === "") {
		deactivateInputContainer();
	}
	if (e.target != textarea && textarea.value === "") {
		deactivateTextareaContainer();
	}
});

inputEmail.addEventListener("keydown", (e) => {
	if (e.keyCode === 9) {
		activateTextareaContainer();
		if (inputEmail.value === "") {
			deactivateInputContainer();
		}
	}
});

textarea.addEventListener("keydown", (e) => {
	if (e.keyCode === 9) {
		if (textarea.value === "") {
			deactivateTextareaContainer();
		}
	}
});
