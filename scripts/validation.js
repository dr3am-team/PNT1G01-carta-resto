function validarEntradas(inputNombre, inputMail, inputPassword, inputTel) {
  allLetter(inputNombre);
  alphanumeric(inputPassword);
  ValidateEmail(inputMail);
  ValidarNroTel(inputTel);
  required();
}

function ValidarNroTel(inputtxt) {
  var nrotel = /^\d{10}$/;
  if (inputtxt.value.match(nrotel)) {
    return true;
  } else {
    alert("Teléfono inválido");
    return false;
  }
}

function ValidateEmail(inputMail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputMail.value.match(mailformat)) {
    document.form1.text1.focus();
    return true;
  } else {
    alert("Pusiste mal tu direccion email!");
    document.form1.mail.focus();
    return false;
  }
}
//valido nombre
function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert("Por favor escriba un nombre valido");
    return false;
  }
}
//chequeo que la contraseña tenga letras Y numeros
function alphanumeric(inputtxt) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (inputtxt.value.match(letters)) {
    document.form1.password.focus();
    return true;
  } else {
    alert("La contraseña debe tener letras y numeros");
    return false;
  }
}
//chequear que el campo mensaje no este vacio
function required() {
  var empt = document.forms["form1"]["mensaje"].value;
  if (empt == "") {
    alert("Por favor, escriba un mensaje");
    return false;
  } else {
    return true;
  }
}
