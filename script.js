function saludar() {

    let nombre = document.getElementById("nombre").value;

    let genero = document.getElementById("genero").value;

    let saludo = document.getElementById("saludo");


    if (nombre == "") {

        saludo.textContent = "Introduce tu nombre.";

    } else if (genero == "chica") {

        saludo.textContent = "Buenos días alumna, " + nombre;

    } else if (genero == "chico") {

        saludo.textContent = "Buenos días alumno, " + nombre;

    } else {

        saludo.textContent = "Selecciona si eres chica o chico.";

    }

}