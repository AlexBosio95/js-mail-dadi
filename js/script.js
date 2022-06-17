const elencoMail = ['pippo@gmail.com', 'pluto@gmail.com', 'giacomo@gmail.com', 'pino@gmail.com', 'umberto@gmail.com', 'peppino@gmail.com', 'sara@gmail.com', 'linda@gmail.com', 'francesca@gmail.com', 'serena@gmail.com', 'monica@gmail.com', 'alessandro@gmail.com', 'luca@gmail.com', 'rebecca@gmail.com', 'dino@gmail.com'];

const emailUser = prompt('Inserisci la tua email');

let verify = false;

for (let index = 0; index < elencoMail.length; index++) {
    
    if (emailUser == elencoMail[index]){
        verify = true;
    } 
}

if (verify == true){
    console.log('Puoi entrare')
} else {
    console.log('Accesso negato l\'email non è presente')
}