const modal = document.querySelector(".modal-btn");
const modalShow = document.querySelector(".modal-hide");

modal.addEventListener("click", function () {
	modalShow.classList.add("modal");
});
const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
	modalShow.classList.remove("modal");
});
