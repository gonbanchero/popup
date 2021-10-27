const openBtn = document.querySelector(".califica_btn");
const closeBtn = document.querySelector(".svg");
const contenedor = document.querySelector(".popup_container");
const popup_items = document.querySelector(".popup-items");
const calificationBtn = document.querySelectorAll(".boton");
const botoneraBtn = document.querySelector(".botonera");
const siguiente = document.querySelector(".siguiente");
const mensaje = document.querySelector(".popup_message");
const cerrarSvg = document.querySelector(".svg");
const cerrarSvg2 = document.querySelector(".svg-2");
let botones;

let btnSelected = true;

const openPopup = function () {
  contenedor.classList.remove("hidden");
};

const cerrarPopup = function () {
  contenedor.classList.add("hidden");
};

const siguienteBtn = function () {
  popup_items.classList.add("hidden");
  mensaje.classList.remove("hidden");
};

function desactivar() {
  for (let i = 0; i < calificationBtn.length; i++) {
    calificationBtn[i].classList.remove("active");
  }
}

openBtn.addEventListener("click", openPopup);

function activateBtn() {
  const btnList = [...calificationBtn]; // convierto nodelist en un array
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (
        btnList.some((bt) => bt.classList.contains("active")) && // Si la lista contiene "some" que cumpla la condición
        !btn.classList.contains("active") // && el botón actual no contiene la clase active
      ) {
        activeBtn = btnList.find((bt) => bt.classList.contains("active")); //Creo una variable y uso find para agarrar el botón activo.
        activeBtn.classList.remove("active"); // Le saco la clase active a ese botón
        btn.classList.add("active"); // Le agrego al botón apretado la clase active
      } else {
        // Si no pasa que hay un botón activo ni que el btn tocado este activo, simplemente agrega la clase al botón apretado
        btn.classList.add("active");
      }
    });
  });
}

activateBtn(); // Llamo a la función

siguiente.addEventListener("click", () => {
  const btnList = [...calificationBtn]; // convierto nodelist en un array
  if (
    !document.querySelector(".checkbox").checked &&
    btnList.some((bt) => bt.classList.contains("active"))
  ) {
    alert("tienes que aceptar las condiciones");
  } else if (
    document.querySelector(".checkbox").checked &&
    !btnList.some((bt) => bt.classList.contains("active"))
  ) {
    alert("tienes que seleccionar una calificación");
  } else if (
    !document.querySelector(".checkbox").checked &&
    !btnList.some((bt) => bt.classList.contains("active"))
  ) {
    alert("tienes que seleccionar una calificación y aceptar las condiciones");
  } else {
    siguienteBtn();
  }
});

cerrarSvg.addEventListener("click", () => {
  cerrarPopup();
});

cerrarSvg2.addEventListener("click", () => {
  cerrarPopup();
  popup_items.classList.remove("hidden");
  mensaje.classList.add("hidden");
  document.querySelector(".checkbox").checked = false;
  desactivar();
});

document.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.key === "Escape" && !contenedor.classList.contains("hidden")) {
    cerrarPopup();
  }
});
