// ----------- Modulo Local -----------

// module.exports.suma = (sum1, sum2)  => Si quiero exportar solo esta funcion
const suma =(num1, num2) =>{
    return num1 + num2;
}

const resta = (num1, num2) =>{
    return num1 - num2;
}

// EXPORTAMOS LAS FUNCIONES para que sean usadas por otros modulos
module.exports = {
    suma, resta
}