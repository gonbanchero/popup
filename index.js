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

openBtn.addEventListener("click", openPopup);

for (let i = 0; i < calificationBtn.length; i++) {
  calificationBtn[i].addEventListener("click", function () {
    botones = calificationBtn[i];
    botones.classList.add("active");
  });
}

function desactivar() {
  for (let i = 0; i < calificationBtn.length; i++) {
    calificationBtn[i].classList.remove("active");
  }
}

// const active = function () {
//   for (let i = 0; i < calificationBtn.length; i++) {
//     calificationBtn[i].classList.add("active");
//   }
// };

// botoneraBtn.addEventListener("click", active);

siguiente.addEventListener("click", () => {
  if (
    !document.querySelector(".checkbox").checked &&
    botones.classList.contains("active")
  ) {
    alert("tienes que aceptar las condiciones");
  } else if (
    document.querySelector(".checkbox").checked &&
    !botones.classList.contains("active")
  ) {
    alert("tienes que seleccionar una calificación");
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
