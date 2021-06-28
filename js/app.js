const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    banderillas(data);
    formularioCliente(data);
    filtros(data);
  } catch (error) {
    console.log(error);
  }
};

const banderillas = (data) => {
  let elementos = "";
  data.forEach((item) => {
    /* recorrer la data y el element son todos los item  */
    elementos += `
  <article class="card">
        <img
          src="${item.flag}"
          alt="bandera"
          class="img-fluid"
        />
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>
            <b>Population:</b>
            ${item.population}
          </p>
          <p>
            <b>Region:</b>
            ${item.region}
          </p>
          <p>
            <b>Capital:</b>
            ${item.capital}
          </p>
          
        </div>
      </article>`;
  });
  banderas.innerHTML = elementos;
};
