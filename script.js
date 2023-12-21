const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

const landing = document.querySelector('.landing')


landing.addEventListener('click', () => {

  container.classList.remove('change')

})

menuIcon.addEventListener("click", () => {
  container.classList.toggle("change");
});
