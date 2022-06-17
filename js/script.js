// Array con elenco email
const elencoMail = ['pippo@gmail.com', 'pluto@gmail.com', 'giacomo@gmail.com', 'pino@gmail.com', 'umberto@gmail.com', 'peppino@gmail.com', 'sara@gmail.com', 'linda@gmail.com', 'francesca@gmail.com', 'serena@gmail.com', 'monica@gmail.com', 'alessandro@gmail.com', 'luca@gmail.com', 'rebecca@gmail.com', 'dino@gmail.com'];
// variabile dove viene scritta l'email
const emailUser = document.getElementById('email');
// Variabile dove scrivo il risultato di accesso
const checkUser = document.getElementById('check-user');
// Variabile bottone di controllo
const verEmail = document.getElementById('btn-check');

// Verifica il vero o falso 
let verify = false;

// Evento click per contollo email
verEmail.addEventListener('click', function(){

    console.log(emailUser.value);

    for (let index = 0; index < elencoMail.length; index++) {

        if (emailUser.value == elencoMail[index]) {
            verify = true;
        }
    }

    if (verify == true) {
        console.log('Puoi entrare');
        checkUser.innerHTML = ('Puoi entrare');
        checkUser.classList.add('text-success')
        checkUser.classList.remove('text-danger')
        
    } else {
        console.log('Accesso negato l\'email non è presente');
        checkUser.innerHTML = ('Accesso negato l\'email non è presente');
        checkUser.classList.add('text-danger')
        checkUser.classList.remove('text-success')


    }

    
    
});






// Gioco dei dadi 

const userRandom = Math.floor((Math.random() * 6) + 1);
const pcRandom = Math.floor((Math.random() * 6) + 1);

console.log('User' + ' ' + userRandom);
console.log('Pc' + ' ' + pcRandom);

if (userRandom == pcRandom) {
    console.log('Pareggio');
}
else if (userRandom < pcRandom){
    console.log('Pc ha vinto');
}
else {
    console.log('User hai vinto');
}
