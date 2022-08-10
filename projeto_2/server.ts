//generic types

interface Cachorro {
    nome:string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [ k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    
    constructor(nome, idade, parqueFavorito) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}


const cao = new MeuCachorro("Apolo",14,"carandiru")
//---------------------------------------------------------
// interface IUser{
//     id: string;
//     email: string;
// }

// interface IAdmin extends IUser {
//     cargo:'gerente'| "coordenador"| 'supervisor';
// }

// function rediricione( usuario: IUser | IAdmin){
//     if( 'cargo' in usuario){
//         // libere acesso a administração
//     }
//     // acesso a area do usuario.
// }


//----------------------
// import { arrayBuffer } from "stream/consumers"


// function adicionaApendiceALista<T>(array: any[], valor: T){
//     return array.map(item => item + valor)
// }

// adicionaApendiceALista([1,2,3],1) //ou  (["a"."b"."c"].'D') o T do diamante vai mudar de acordo com o que for inserido

//-----------------------------
// const input = document.getElementById("input") as HTMLInputElement;

// //input.value 
// input.addEventListener("input",(event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value)
// })

// ----------------------------------------------------------
interface IAnimal {
    nome: string;
    tipo:'terrestre' | 'aquatico';
   // executarRugido(alturaEmDecibeis: number): void;
   domestico: boolean
}

interface IFelinos extends IAnimal{
    visaoNoturna: boolean;
}

interface ICaninos extends IAnimal{
    porte: "pequeno" | "medio" | "grande"
}

const animal: IAnimal = {
    nome : "elefante",
    tipo:"terrestre",
    domestico : false
   // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
// types 

type IDomestico =  IFelinos | ICaninos;

const pet: IDomestico = {
    domestico:true,
    nome:"doguinho",
    porte: "medio",
    tipo:"terrestre",
    visaoNoturna:true,
}