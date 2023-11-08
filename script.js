//Ej1
var miobjeto;
miobjeto = {
    nombre: "Juan",
    edad: 30
};
var mensaje = "Mi nombre es " + miobjeto.nombre + "\r\n";
mensaje += "Tengo " + miobjeto["edad"] + " años";
alert(mensaje);

//Ej2
var nombrePropiedad = "nombre";
var miobjeto = {
    nombre: "Juan",
    edad: 30
};
alert(miobjeto[nombrePropiedad]); //Juan

//Ej3
var mivariable = "nombre";
var miobjeto = {
    nombre: "Juan",
    'mi edad': 30
};
alert(miobjeto['mi edad']); //30

//Ej4
var miobjeto = {
    nombre: "Juan",
    edad: 30
};
miobjeto.nombre = 'Martín';
miobjeto.trabajo = "Programador";
alert(miobjeto.nombre + " " + miobjeto.edad + " " + miobjeto.trabajo);

//Ej5
var miobjeto = {
    nombre: "Juan",
    edad: 30,
    motocicleta: {
        modelo: "Suzuki",
        fecha: 1981
    }
};
alert(miobjeto.nombre + " tiene una " + miobjeto.motocicleta.modelo);

//Ej6
var miobjetoNew = {
    nombre: "Juan",
    edad: 55,
    mostrardatos: function () {
        var mensaje = "Nombre: " + miobjetoNew.nombre + "\r\n";
        mensaje += "Edad: " + miobjetoNew.edad;
        alert(mensaje)
    },
    cambiarnombre: function (nombrenuevo) {
        miobjetoNew.nombre = nombrenuevo;
    }
};
alert("Ejercicio 6 - Inicia");
miobjetoNew.mostrardatos(); // "Nombre: Juan Edad: 55"
miobjetoNew.cambiarnombre("José");
miobjetoNew.mostrardatos(); // "Nombre: José Edad: 55"

//Ej7
var miobjetoActualizado = {
    nombre: "Javier",
    edad: 75,
    mostrardatos: function () {
        var mensaje = "Nombre: " + miobjetoActualizado.nombre + "\r\n";
        mensaje += "Edad: " + miobjetoActualizado.edad;
        alert(mensaje);
    },
    cambiarnombre: function (nombrenuevo2) {
        var nombreviejo = miobjetoActualizado.nombre;
        miobjetoActualizado.nombre = nombrenuevo2;
        return nombreviejo;
    }
};
alert("Ejercicio 7 - Inicia");
miobjetoActualizado.mostrardatos(); // "Nombre: Javier Edad: 75"
var anterior = miobjetoActualizado.cambiarnombre("Pedro");
miobjetoActualizado.mostrardatos(); // "Nombre: Pedro Edad: 75"
alert("El nombre anterior era: " + anterior); // Javier

let num1 = 5.4;
let num2 = 3.2;
let suma = num1 + num2;
alert(suma.toFixed(2));