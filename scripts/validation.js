function ValidarNroTel(inputtxt) {
  var nrotel = /^\d{10}$/;
  if (inputtxt.value.match(nrotel)) {
    return true;
  } else {
    alert("teléfono inválido");
    return false;
  }
}
