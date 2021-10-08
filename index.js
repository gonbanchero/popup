let boton = document.getElementById("boton");
let popup = document.getElementById("popup");
let cerrar = document.getElementById("cerrar");
let btn_number = document.getElementById("botones");

boton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

cerrar.addEventListener("click", () => {
  popup.classList.add("hidden");
});

document.getElementById("1").onclick = GFG_click;
document.getElementById("2").onclick = GFG_click;
document.getElementById("3").onclick = GFG_click;
document.getElementById("4").onclick = GFG_click;
document.getElementById("5").onclick = GFG_click;

function GFG_click() {
  this.classList.add("active");
}
