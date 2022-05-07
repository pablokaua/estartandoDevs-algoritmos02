const palavra = 18;

//FUNÇÃO QUE VÁLIDA SE É STRING
const ehString = palavra => {
    if(typeof palavra != 'string'){
        return false;
    }
    return true;
}

//FUNÇÃO QUE INVERTE STRING
const inverter = string => {
    if(!ehString(string)){console.log("Oh carai"); return undefined;} 
    const tamanho = string.length - 1;
    let inverso = '';
    for(let i=tamanho;i>=0;i--) inverso += string[i];
    return inverso;
}

//FUNÇÃO QUE CONTA NÚMERO DE VOGAIS DA STRING
const contarNumeroVogais = string => {
    if(!ehString(string)){console.log("Oh carai"); return undefined;} 
    const vogais = ['a','e','i','o','u'];
    let numeroVogais = 0;
    for(let letra of string.toLowerCase()){
        if(vogais.includes(letra))  numeroVogais++;
    }
    return numeroVogais;
}

//FUNÇÃO QUE CRIA UM OBJETO/RELATÓRIO
function FazerRelatorio(string){
    if(!ehString(string)){console.log("Oh carai"); return undefined;} 
    this.palavra = string;
    this.palavrainverso = inverter(string);
    this.numeroVogais = contarNumeroVogais(string);  
}

//DECLARANDO VARIÁVEIS PARA RECEBER RETURN DAS FUNÇÕES
const palavraInversa = inverter(palavra);
const numeroVogais = contarNumeroVogais(palavra);
const objetoString = new FazerRelatorio(palavra);

//VERIFICA SE AS VARIÁVEIS RECEBERAM STRINGS
if(
    palavraInversa != undefined && 
    numeroVogais != undefined &&
    objetoString != undefined
)
{  
    console.log(`A palavra ${palavra} inversa é: ${palavraInversa}`);
    console.log(`A palavra ${palavra} tem ${numeroVogais} vogais`);
    console.log(objetoString);
}
