let c, d;

let, suma, resta, mult, div, residuo, potencia;

// obtener los datos a travez del usuario
a = prompt ("ingrese un numero_: ");
b = prompt ("ingrese otro numero: ");

// resultados delas operaciones
suma = Number (a) + Number (b); // aqui la operacion
document.write("la suma es: ", suma, "<br>");
console.log("la suma es: ", suma);

resta = Number (a) - Number (b);
document.write("la resta es: ", resta, "<br>");
console.log("la resta es: ", resta);

mult = Number (a) * Number (b);
document.write("la multiplicacion es: ", mult, "<br>");
console.log("la multiplicacion es: ", mult);

residuo = Number (a) % Number (b);
document.write("el residuo es: ", residuo, "<br>");
console.log("el residuo es: ", residuo);

div =  Number (a) / Number (b);
document.write("la division es: ", div, "<br>");
console.log("la dvision es: ", div);

potencia =  Number (a) ** Number (b);
document.write("la potencia es: ", potencia, "<br>");
console.log("la potencia es: ", potencia);

//obtner los daros a traves del usuario
c = parseInt(prompt("ingrese un numero"));
d = parseFloat(prompt("ingrese otro numero"));

suma = c + d
resta = c - d
mult = c + d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("los resultados de las operaciones son: ", "<br>",
    "suma: ", suma, "<br>",
    "resta: ", resta, "<br>",
    "multiplicacion: ", mult, "<br>",
    "division: ", div, "<br>",
    "residuo: ", residuo, "<br>",
    "potencia: ", potencia, "<br>",
);

console.log("las operaciones resueltas son: ",
    "suma: ", suma,
    "resta: ", resta,
    "multiplcacion: ", mult,
    "division: ", div,
    "residuo: ", residuo,
    "potencia: ", potencia,
);
