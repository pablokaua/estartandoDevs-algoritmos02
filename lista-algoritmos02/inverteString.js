const inverter = string => {
    if(!ehString(string)){console.log("Oh carai"); return undefined;}
    const tamanho = string.length - 1; 
    let inverso = '';
    for(let i=tamanho;i>=0;i--) inverso += string[i];
    return inverso;
}