let pecas = "Peao";
let resultado = pecas.toLowerCase();
switch (resultado) {
  case "rei".toLowerCase():
    console.log(resultado + ' Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.');
      break;

  case "Dama".toLowerCase():
    console.log(resultado + ' Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
      break;

    case "Torre".toLowerCase():
    console.log(resultado + ' Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
      break;

  case "Bispo".toLowerCase():
    console.log(resultado + ' Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.');
      break;

  case "Cavalo".toLowerCase():
    console.log(resultado + ' É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.');
      break;

  case "Peao".toLowerCase():
    console.log(resultado + ' Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. ');
      break;
    
  default : console.log("erro");
}