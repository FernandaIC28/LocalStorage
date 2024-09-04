document.addEventListener("DOMContentLoaded", function() {
  var datoGuardado = localStorage.getItem("datoGuardado");
  if (datoGuardado !== null) {
    document.getElementById("data").textContent = datoGuardado;
  }
});
