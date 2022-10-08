const toggleSideNav = document.querySelector(".toggle-side-nav");
const sideNav = document.querySelector(".side-nav");

toggleSideNav.addEventListener("change", () => {
	sideNav.classList.toggle("translate-x-0");
	console.log(toggleSideNav.children);
});
