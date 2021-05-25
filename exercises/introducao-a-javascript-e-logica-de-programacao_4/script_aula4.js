let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
/*
console.log('bem vinda, ' + info.personagem)


info['recorrente'] = 'sim';

console.log(info.recorrente);
console.table(info);

for(let key in info){
    console.log(key)
}

for(let key in info){
    console.log(info[key])
}
*/


let info2 ={
    personagem : 'Tio Patinhas',
    origem : 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota : 'O último MacPatinhas',
    recorrente : 'sim',
}

console.log(info.personagem + ' e ' + info2.personagem + ' ' + info.origem + ' e ' + info2.origem +' '+ info.nota + ' e ' + info2.nota + ' ' + info2.recorrente)