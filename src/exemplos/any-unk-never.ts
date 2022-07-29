let anyiwillback:any;
anyiwillback = 3;
anyiwillback = 'teste';
anyiwillback = 5;

let stringTest = 'verificar';
stringTest = anyiwillback;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'agora vai';


let stringTest2: string = 'vai sim';
// stringTest2 = unknownValor; so aceita definir se fizer uma validação em cima dele como o exemplo abaixo

if (typeof unknownValor === 'string'){
    stringTest2 = unknownValor
}

function jagarErro(erro:string, codigo:number):never{
    throw {error: erro, code:codigo}
}

jagarErro('ALERT ERROR', 500)