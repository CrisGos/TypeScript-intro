// Teoría y Práctica
// 3

// ¿Cómo influye una buena configuración inicial en el desarrollo de un proyecto?
// // Mejora el rendimiento y asegura que mi proyecto funcione de la manera que quiiero que funcione, teniendo en cuenta modulos, condiguraciones deseadas, etc.

// ¿Qué ventajas ofrece TypeScript en comparación con JavaScript puro?
// // Mejora la prevencion de errores, la documentacion, el rendimiento, la mantenibilidad, autocompletado, legibilidadm escalabilidad e integracion.

// ¿Por qué es importante verificar los tipos de datos en un proyecto de software?
// // Para reducir la probabilidad de errores, y establecer un estandar de los tipos de datos en el codigo




// Conceptos de Programación en TypeScript
// 1. Variables y constantes: Tipos, Tipos personalizados
type Producto = {
    id:number;
    nombre: string;
    precio: number;
}

// ¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
// // Declarando un unico tipo de valor para cada variable


// 2. Operadores (aritméticos, booleanos)
function esPar(num:number): boolean {
    let validacion: number = num % 2;
    let isEven: boolean = validacion === 0;
    return isEven;
}

let num: number = 8
let isEven: boolean = esPar(num);
// console.log(`${num} es par?: ${isEven}`);

//¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?
// // Permite operaciones seguras que unicamente permiten un tipo de dato, en caso de que un dato no sea el tipo buscado, un error indicara al desarrollador y/o al usuario sobre su error



// 3. Estructuras de decisión (if, switch, ternarios)
function positivoNegativo(num:number): string {
    let resultado: string = "";
    switch (true) {
        case (num >= 0):
            if (num === 0) {
                resultado = "Cero";
            } else {
                resultado = "Positivo";
            }
            break;
    
        default:
            resultado = "Negativo";
            break;
    }
    return resultado;
}

let num3: number = -6;
let resultado: string = positivoNegativo(num3);
// console.log(`${num3} es ${resultado}`);


// ¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?
// // Cuando las condiciones son simples, cortas y faciles de enteder tendra prioridad un operador ternario por legibilidad del codigo



// 4. Estructuras de iteración (while, for, foreach, map)

function imprimirNombres(nombres: string[]) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}

let nombres: string[] = ['Jose', 'Juan', 'Manuela', 'Andrea', 'Lucas', 'Lorenas'];
// imprimirNombres(nombres);

// ¿Qué ventajas tiene el método map sobre un bucle for en TypeScript?
// // Cuando no debo modificar la lista o string original, ademas para mayor legibilidad del codigo



// Estructuras de Datos y Funciones
// 1. Arrays | Listas

// // tarea 1
function suma(numeros: number[]): number {
    let total: number = numeros.reduce(function (a,b) {
        return a + b;
    })
    return total;
}

let numeros: number[] = [1, 2, 3, 4, 5];
let total: number = suma(numeros)
// console.log(total);


// // Tarea 2
function concatenacion(cadenas: string[]): string {
    let palabrasConcatenadas: string = cadenas.reduce((a,b) => a + " " + b);
    return palabrasConcatenadas;
}

let cadenas: string[] = ['Estoy', 'Aprendiendo', 'TypeScript desde', 'Riwi'];
let palabraCompleta: string = concatenacion(cadenas);
// console.log(palabraCompleta);


// // Tarea 3
function imprimirNombreId(users: User[]) {
    users.forEach(user => {
        console.log(user.nombre);
    });
}

interface User {
    id:number;
    nombre: string;
}

let users: User[] = [
    {
        id:1,
        nombre: 'Julia'
    },
    {
        id:2,
        nombre: 'Mateo'
    },
    {
        id:3,
        nombre: 'Philipp'
    },
    {
        id:4,
        nombre: 'Juan'
    }
];

// imprimirNombreId(users);


// // Tarea 4
function buscarMayor(numeros: number[]): number {
    let mayor = numeros[0];
    numeros.forEach(numero => {
        numero > mayor ? (mayor = numero) : mayor;
    });
    return mayor;
}

let numeros2: number[] = [1, 2, 30, 4, 5, 20];
// console.log(buscarMayor(numeros2));

// ¿Cómo se puede asegurar el tipo de datos en un array en TypeScript?
// // indicando el tipo de valores que este llevara y seguido de []




// 2. Objetos

// Tarea 1
interface Car {
    marca: string;
    modelo: string;
    año: number;
}

let car: Car = { 
    marca: 'Toyota',
    modelo: 'Prado',
    año: 2030
}

// console.log(`
//     marca: ${car.marca}
//     modelo: ${car.modelo}
//     año: ${car.año}
//     `
// );

// Tarea 2
class carInfo {
    static mostrarInfo(car: Car): string {
        return `marca: ${car.marca}, modelo: ${car.modelo} año: ${car.año}
        `
    }
}

let info: string = carInfo.mostrarInfo(car);
// console.log(info);

// Tarea 3
function aumentarYear(car: Car): Car {
    let newCar: Car = {
        marca: 'Toyota',
        modelo: 'Prado',
        año: car.año + 1,
    }
    return newCar;
}
// console.log(aumentarYear(car));


// ¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
// // Asegurar la consistencia de los datos




// 3. Funciones
// Tarea 1
function devolverMayor(numeros: number[]): number {
    return Math.max(...numeros);
}

let numeros3: number[] = [1, 2, 30, 4, 5, 20];
// console.log(devolverMayor(numeros3));


// Tarea 2
function tipos(param1: any, param2: any, param3: any): boolean {
    return typeof param3 !== typeof param2 ?  false : true && typeof param2 !== typeof param1 ?  false : true
}
// console.log(`Todos los parametros son del mismo tipo?: ${tipos(1,2,3)}`);


// Tarea 3
function girar90(matriz: number[][]): number[][] {
    let newMatriz: number[][] = [[], []];
    for (let n = matriz.length - 1; n >= 0; n--) {
        for (let m = 0; m < matriz.length; m++) {
            newMatriz[m][n] = matriz[matriz.length-n-1][m];
        }
    }
    return newMatriz;
}

let matriz: number[][] = [[1,2],[3,4]];
console.log(girar90(matriz));

// ¿Qué beneficios ofrece la definición explícita de tipos en las funciones en TypeScript?
// // Mejora la deteccion de errores y proporciona una mejor documentacion.


// Clases, Interfaces, metodos, constructores, Pilares de la POO
