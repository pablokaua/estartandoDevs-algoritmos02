const contarNumeroVogais = string => {
    if(!ehString(string)){console.log("Oh carai"); return undefined;} 
    const vogais = ['a','e','i','o','u'];
    let numeroVogais = 0;
    for(let letra of string.toLowerCase()){
        if(vogais.includes(letra))  numeroVogais++;
    }
    return numeroVogais;
}
