function add(type) {

    var valor = document.getElementById("texto").value;

    for (i = 0; i < valor; i++) {

        //Crea un tipo de entrada de forma dinámica.
        var element = document.createElement("input");

        // Asignar diferentes atributos al elemento.
        element.setAttribute("type", type);
        element.setAttribute("value", type);
        element.setAttribute("name", type);

        var foo = document.getElementById("fooBar");

        //Agrega el elemento en la página(en espacio)
        foo.appendChild(element).style.color = 'blue';
    }
}

function borrar(type) {
    location.reload();
}
