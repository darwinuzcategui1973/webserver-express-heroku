const hbs = require('hbs');


// helpers son funciones que se lanza cuando los template los requieran
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
});
hbs.registerHelper("capitalizar", (texto) => {
    let palabras = texto.split(" ");
    palabras.forEach((palabra, indice) => {
        palabras[indice] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(" ");

});