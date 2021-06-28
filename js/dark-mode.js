const btnDark = document.querySelector(".btn-dark-mode");

btnDark.addEventListener("click", () => {
  console.log("diste clik");
  document.body.classList.toggle(
    "dark-mode"
  ); /* cada vez que precionemos el boton cambiara al modo oscuro */

  if (document.body.className === "dark-mode") {
    btnDark.innerHTML = `
      <i class="fas fa-sun"></i> Light Mode
      `;
  } else {
    btnDark.innerHTML = `
        <i class= "far fa-moon"></i> Dark Mode
  `;
  }
});
