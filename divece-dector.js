//funcion que se utiliza para detectar en que dispositivo se esta visualizando el codigo mediante la version de navegador
//function that is used to detect in which device the code is being displayed through the browser version

function deviceDetector(){

//mediante una sentencia if se comprueba el tipo de navegador si es un dispositivo movil un pc
//using an if statement, the browser type is checked if a PC is a mobile device

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

//si es un movil se imprime un mensaje por consola
//if it is a mobile, a message is printed per console

   console.log('this is a mobile device');

//el mensaje por consola se puede sustituir por cualquier bloque de codigo que se quiera ejecutar en un movil
//the message by console can be replaced by any block of code that you want to execute in a mobile

}else{

//de lo contrario se imprime por consola que es una pc
//otherwise it is printed by console which is a pc

console.log('this is a pc ');

//el mensaje por consola se puede sustituir por cualquier bloque de codigo que se quiera ejecutar en un pc
//the message per console can be replaced by any block of code that you want to run on a pc

};

};
