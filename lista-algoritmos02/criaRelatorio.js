function FazerRelatorio(string){
    if(!ehString(string)){console.log("Oh carai"); return undefined;} 
    this.palavra = string;
    this.palavrainverso = inverter(string);
    this.numeroVogais = contarNumeroVogais(string);  
}
