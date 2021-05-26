const open = document.querySelector(".navigation");
const hideContent = document.querySelector(".show-content");
const openNav = document.querySelector(".side-nav");
const copy = document.querySelectorAll(".copy-btn");

open.addEventListener("click", function () {
	openNav.classList.toggle("show");
	hideContent.classList.toggle("hide-content");
});

copy.forEach((copy) => {
	copy.addEventListener("click", function () {
		copy.innerHTML = "Copied!";
	});
});

new ClipboardJS(".copy-btn");
