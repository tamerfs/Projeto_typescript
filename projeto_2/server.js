"use strict";
//generic types
class MeuCachorro {
    constructor(nome, idade, parqueFavorito) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}
const cao = new MeuCachorro("Apolo", 14, "carandiru");
const animal = {
    nome: "elefante",
    tipo: "terrestre",
    domestico: false
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
};
const pet = {
    domestico: true,
    nome: "doguinho",
    porte: "medio",
    tipo: "terrestre",
    visaoNoturna: true,
};
