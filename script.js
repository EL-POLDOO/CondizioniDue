/* Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
se temperatura è minore di 20, stampare “non ci sono più le mezze stagioni”
se temperatura è maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”

se temperatura è minore di 30, stampare “mi dia una peroni sudata”
se temperatura è minore di 0, stampare “non è tanto il freddo quanto l’umidità’”
se temperatura è minore di -10, stampare “copriti…ancora ti raffreddi”
Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.
  */
/* 


se temperatura è minore di -10, stampare “copriti…ancora ti raffreddi”
se temperatura è minore di 0, stampare “non è tanto il freddo quanto l’umidità’”
se temperatura è minore di 20, stampare “non ci sono più le mezze stagioni”
se temperatura è minore di 30, stampare “mi dia una peroni sudata”
se temperatura è maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
 */


let temperatura = prompt('inserisci la temperatura ?')

temperatura = Number(temperatura);



/* if (temperatura < (-10)) {
    console.log('copriti…ancora ti raffreddi');

} else if (temperatura < 0) {
    console.log('non è tanto il freddo quanto l’umidità’');

} else if (temperatura < 20) {
    console.log('non ci sono più le mezze stagioni');

} else if(temperatura < 30){
    console.log('mi dia una peroni sudata');

}else if(temperatura >= 30){
    console.log('lu mare, lu sole, lu ientu');
    
}

 */

switch (true) {
    case (temperatura < -10):
        console.log('copriti…ancora ti raffreddi');
        break;
        
    case (temperatura < 0):
        console.log('non è tanto il freddo quanto l’umidità');
        break;
        
    case (temperatura < 20):
        console.log('non ci sono più le mezze stagioni');
        break;
        
    case (temperatura < 30):
        console.log('mi dia una peroni sudata');
        break;
        
    default:
        console.log('lu mare, lu sole, lu ientu');
        break;
}


/* 
#  /\_/\  
# ( o.o ) 
#  > ^ <  
 */