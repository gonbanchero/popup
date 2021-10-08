let boton = document.getElementById("boton");
let popup = document.getElementById("popup");
let cerrar = document.getElementById("cerrar");

boton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

cerrar.addEventListener("click", () => {
  popup.classList.add("hidden");
});
