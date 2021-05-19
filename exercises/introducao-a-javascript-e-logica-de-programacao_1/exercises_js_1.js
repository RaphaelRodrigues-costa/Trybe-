let angulo1 = 100;
let angulo2 = 40;
let angulo3 = 40;

let soma = angulo1 + angulo2 + angulo3;

if(soma == 180 ){
    console.log(true);
}
else if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log("Erro");
}
else{
  console.log(false);
}
