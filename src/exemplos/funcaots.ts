function printaValores(numero1:number,numero2:number): void{
    console.log(numero1+numero2);
}// void pois nao retorna nada;

function somarValorETratalos(numero1:number,numero2:number, callback: (numero:number)=>number): number{
   let resultado = numero1+numero2;
   return callback(resultado);
}

function aoQuadrado(numero:number):number{
    return numero * numero;
}
function divisivelPorEleMesmo(numero:number):number{
    return numero / numero;
}

console.log(somarValorETratalos(2,3, aoQuadrado));

console.log(somarValorETratalos(2,3, divisivelPorEleMesmo));
