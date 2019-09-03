//  EcmaScript >> ES6

// Variables

var texto = "hola mundo!"; // ES5
const nuevaVar = "hola mundo!"; // ES6
let nuevaVar2 = "hola mundo!"; // ES6

// Tipo de datos

const string = "";
const number = 54;
const numberFloat = 54.2;
const boolean = true;
const array = ["string", 54, true];
const object = {
  nombre: "",
  direccion: {
    calle: "",
    altura: 939
  },
  direcciones: [
    {
      calle: "",
      altura: 145
    },
    {
      calle: "",
      altura: 939
    },
    {
      calle: "",
      altura: 555
    }
  ]
};

const nada = null;
let indefinido = undefined;

// Funciones
function suma(param1, param2) {
  return param1 + param2;
}

const sumar = function(param1, param2) {
  return param1 + param2;
};

const multiplicarPor2 = function(param1) {
  return param1 * 2;
};

const dividirPor2 = function(param1) {
  return param1 / 2;
};

const exponenciar2 = function(param1) {
  return param1 * param1;
};

const calcular = function(valor1, valor2, callback) {
  const sumaDeValores = valor1 + valor2;

  const sumaDelCallback = callback(sumaDeValores);

  return sumaDelCallback;
};

suma(5, 2);
sumar(5, 2);
dividirPor2(6);

calcular(1, 2, dividirPor2);
// 1° >> 1 + 2 >> 3
// 2° >> Callback >> 3 / 2 (ejecuta la funcion dividir) >> 1.5
// 3° return  >> 1.5

calcular(1, 2, multiplicarPor2);
// 1° >> 1 + 2 >> 3
// 2° >> Callback >> 3 * 2 (ejecuta la funcion multiplicar) >> 6
// 3° return  >> 6

calcular(1, 2, exponenciar2);
// 1° >> 1 + 2 >> 3
// 2° >> Callback >> 3 * 3 (ejecuta la funcion exponenciar) >> 9
// 3° return  >> 9

// Funciones ES6 (arrow function)
const sumarES6 = (param1, param2) => param1 + param2;
