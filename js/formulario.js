const formulario = document.getElementById("formulario");
const inputFormulario = document.getElementById("inputFormulario");

const formularioCliente = (data) => {
  formulario.addEventListener("keyup", (e) => {
    e.preventDefault();
    const letraCliente =
      inputFormulario.value.toLowerCase(); /*  toLowerCase() para que las letras se transformen en minusculas*/
    const arrayFiltrado = data.filter((item) => {
      const letraApi = item.name.toLowerCase();

      if (letraApi.indexOf(letraCliente) !== -1) {
        return item;
      }
    });
    banderillas(arrayFiltrado);
  });
};
