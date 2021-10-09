//Menor que 16 não vota
//Maior que 65 voto opcional
//18 anos


var idade = 40
console.log(`Voce tem ${idade} anos`)
if(idade < 16){
    console.log(`Voce não vota`)
}else if(idade < 18 || idade > 65){
    console.log(`Voto Opcional`)
}else {
    console.log(`Voto Obrigatório`)
}
