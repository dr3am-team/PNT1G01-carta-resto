function ValidarNroTel(inputtxt) {
  var nrotel = /^\d{10}$/;
  if (inputtxt.value.match(nrotel)) {
    return true;
  } else {
    alert("teléfono inválido");
    return false;
  }
}

//chequear que no este vacio
function required() {
  var empt = document.forms["form1"]["text1"].value;
  if (empt == "") {
    alert("Please input a Value");
    return false;
  } else {
    alert("Code has accepted : you can try another");
    return true;
  }
}
