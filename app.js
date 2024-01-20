function mostrarImagen(){
    var result = document.getElementById("section2");
    var imagen = document.createElement("img");
    imagen.src = "imagen.jpg"
    imagen.setAttribute("id", "imagen")
    result.appendChild(imagen);

    var timer = setTimeout(() => {
        let ocultar = document.getElementById("imagen");
        ocultar.classList.toggle("imagen-desaparecer")
        imagen.remove()
    }, 7000);
}

function insertDom(var1) {
    var result = document.getElementById("section2");
    var div = document.createElement("div");
    div.setAttribute("id", "timer");
    div.classList.add("resultados");
    div.innerHTML = `
        ${var1}
    `
    result.appendChild(div);

    var timer = setTimeout(() => {
        let ocultar = document.getElementById("timer")
        ocultar.classList.toggle("desaparecer")
        div.remove()
    }, 7000);
}

//Algoritmo #1
function tipoDeNumero() {
    var num = parseInt(prompt("Ingrese un número"));
    
    if (num == 0) {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        El número es: 0
        `);
    }
    else if (num < 0) {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        Es un número: negativo
        `);
    } else {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        Es un número: positivo
        `);
    }
}

//Algoritmo #2
function contarCifras() {
    var num = parseInt(prompt("Ingrese un número"));
    
    if (num > 0 && num < 10) {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        Este número tiene: 1 cifra
        `)
    }
    else if (num >= 10 && num < 100) {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        Este número tiene: 2 cifras
        `)
    } else if(num >= 100 && num < 1000) {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        Este número tiene: 3 cifras
        `)
    }
    else {
        insertDom(`
        El número ingresado es: ${num} <br>
        <br>
        Este número tiene 4 o más cifras
        `)
    }   
}

//Algoritmo #3 
function ordenarNumeros() {
    var num1 = parseInt(prompt("Ingrese el primer número"));
    var num2 = parseInt(prompt("Ingrese el segúndo número"));
    var num3 = parseInt(prompt("Ingrese el tercer número"));
    
    if (num1 < num2 && num2 < num3) {
        insertDom(`
        Los número ingresados son: <br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        Y su orden es: <br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        `)
    }
    else if (num1 < num1 && num3 < num2) {
        insertDom(`
        Los número ingresados son: <br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        Y su orden es: <br>
        ${num1} <br>
        ${num3} <br>
        ${num2} <br>
        `)
    }
    else if (num2 < num1 && num1 < num3) {
        insertDom(`
        Los número ingresados son: <br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        Y su orden es: <br>
        ${num2} <br>
        ${num1} <br>
        ${num3} <br>
        `);
    }
    else if (num2 < num3 && num3 < num1) {
        insertDom(`
        Los número ingresados son: <br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        Y su orden es: <br>
        ${num2} <br>
        ${num1} <br>
        ${num3} <br>
        `);
    }
    else if (num3 < num1 && num1 < num2) {
        insertDom(`
        Los número ingresados son:<br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        Y su orden es: <br>
        ${num3} <br>
        ${num1} <br>
        ${num2} <br>
        `);
    }
    else {
        insertDom(`
        Los número ingresados son: <br>
        ${num1} <br>
        ${num2} <br>
        ${num3} <br>
        Y su orden es: <br>
        ${num3} <br>
        ${num2} <br>
        ${num1} <br>
        `);
    }
}

//Algoritmo #4
function app_v_a() {
    var nombre = prompt("Ingrese su nombre");
    var venta = parseInt(prompt("Ingrese el monto de ventas de este mes"));
    var comision;

    if (venta <= 1000) {
        comision = venta * 0.02;
        insertDom(`
        El nombre del vendedor es: ${nombre} <br>
        <br>
        Las ventas que realizo este mes es de B/.${venta} <br>
        <br>
        Su comisión es de: B/.${comision}
        `);
    } else if(venta >= 1001 && venta <= 10000) {
        comision = venta * 0.04;
        insertDom(`
        El nombre del vendedor es: ${nombre} <br>
        <br>
        Las ventas que realizo este mes es de B/.${venta} <br>
        <br>
        Su comisión es de: B/.${comision}
        `);
    } else if(venta >= 10001 && venta <= 20000) {
        comision = venta * 0.05;
        insertDom(`
        El nombre del vendedor es: ${nombre} <br>
        <br>
        Las ventas que realizo este mes es de B/.${venta} <br>
        <br>
        Su comisión es de: B/.${comision}
        `);
    } else {
        comision = venta * 0.06;
        insertDom(`
        El nombre del vendedor es: ${nombre} <br>
        <br>
        Las ventas que realizo este mes es de: B/.${venta} <br>
        <br>
        Su comisión es de: B/.${comision}
        `);
    }
}

//Algoritmo #5
function diccionarioIE() {
    var minusc;
    var palabra = prompt(`Ingresa una de las siguientes palabras o indique el número para traducirla al ingles:
    1. Ferrocarril
    2. Casa
    3. Noche
    4. Positivo
    5. Brillante
    6. Nuevo
    7. Blanco
    8. Sol
    `);

    minusc = palabra.toLowerCase();
    console.log(minusc);

    switch (minusc) {
        case "1":
        case "ferrocarril":
            insertDom(`
            La palabra ingresada es: Ferrocarril <br>
            <br>
            Su traducción al ingles es: Railway
            `)
            break;
        case "2":
        case "casa":
            insertDom(`
            La palabra ingresada es: Casa <br>
            <br>
            Su traducción al ingles es: House
            `)
            break
        case "3":
        case "noche":
            insertDom(`
            La palabra ingresada es: Noche <br>
            <br>
            Su traducción al ingles es: Night
            `)
            break
        case "4":
        case "positivo":
            insertDom(`
            La palabra ingresada es: Positivo <br>
            <br>
            Su traducción al ingles es: Positive
            `)
            break
        case "5":
        case "brillante":
            insertDom(`
            La palabra ingresada es: Brillante <br>
            <br>
            Su traducción al ingles es: Bright
            `)
            break
        case "6":
        case "nuevo":
            insertDom(`
            La palabra ingresada es: Nuevo <br>
            <br>
            Su traducción al ingles es: New
            `)
            break
        case "7":
        case "blanco":
            insertDom(`
            La palabra ingresada es: Blanco <br>
            <br>
            Su traducción al ingles es: White
            `)
            break
        case "8":
        case "sol":
            insertDom(`
            La palabra ingresada es: Sol <br>
            <br>
            Su traducción al ingles es: Sun
            `)
            break
        default:
            insertDom(`
            La palabra ingresada no esta en la lista verifique nuevamente.
            `)
            break
    }
}

//Algoritmo #6
function multiplicar() {
    var tabla = parseInt(prompt("Que tabla desea multiplicar?"));
    for (let i = 0; i <= 12; i++) {
        insertDom(`
        ${tabla} x ${i} = ${i * tabla}
        `)
    }
}

//Algoritmo #7
function imc() {
    var result;
    var redondear;
    var peso = parseFloat(prompt("Ingrese su peso en (kg)"));
    var altura = parseFloat(prompt("Ingrese su altura en (Mts)"));

    result = peso / (altura * altura)
    redondear = result.toFixed(1);

    if (redondear < 18.5) {
        insertDom(`
        Su peso es: ${peso} kg <br>
        Su Altura es: ${altura} mts<br>
        Su IMC es: ${redondear} <br>
        <br>
        Su resultado es: Peso bajo
        `)
        mostrarImagen();
    } else if (redondear >= 18.5 && redondear <= 24.9) {
        insertDom(`
        Su peso es: ${peso} kg <br>
        Su Altura es: ${altura} mts<br>
        Su IMC es: ${redondear} <br>
        <br>
        Su resultado es: Ideal
        `)
        mostrarImagen();
    } else if (redondear >= 25 && redondear <= 29.9) {
        insertDom(`
        Su peso es: ${peso} kg <br>
        Su Altura es: ${altura} mts<br>
        Su IMC es: ${redondear} <br>
        <br>
        Y su resultado es: Sobre peso
        `)
        mostrarImagen();
    } else if (redondear >= 30 && redondear <= 34.9) {
        insertDom(`
        Su peso es: ${peso} kg <br>
        Su Altura es: ${altura} mts<br>
        Su IMC es: ${redondear} <br>
        <br>
        Y su resultado es: Obesidad
        `)
        mostrarImagen();
    } else if (redondear >= 35 && redondear <= 39.9) {
        insertDom(`
        Su peso es: ${peso} kg <br>
        Su Altura es: ${altura} mts<br>
        Su IMC es: ${redondear} <br>
        <br>
        Y su resultado es: Obesidad severa
        `)
        mostrarImagen();
    } else {
        insertDom(`
        Su peso es: ${peso} kg <br>
        Su Altura es: ${altura} mts<br>
        Su IMC es: ${redondear} <br>
        <br>
        Y su resultado es: Obesidad morbida
        `)
        mostrarImagen();
    }

}
