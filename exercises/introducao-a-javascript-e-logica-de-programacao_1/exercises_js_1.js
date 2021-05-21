
/*ex: 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1){
  let imprimindoValores = numbers[index];
  console.log(imprimindoValores)
}
ex 2



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index] ;
   
    
}
console.log(soma)


ex:3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index] 
    
    }

  let media = soma / numbers.length;
  console.log(media)

  ex:4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index] 
    
    }

  let media = soma / numbers.length;
  
  if (media >= 20){
    console.log('valor maior que 20')
  }else{
    console.log('valor menor que 20')
  }*/

  
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let valor = 0;
  for(let index = 0; index < numbers.length;index += 1){
    valor = Math.max(valor)
  }
  console.log(valor)