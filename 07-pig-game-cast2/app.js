/* 
PRAVIDLA HRY: 

- Hra má dva hráče, kteří se střídají každé kolo.
- V každém kole hází hráč kostkou kolikrát chce. Hodnota každého hodu se přičítá k jeho budům v daném kole.
- Pokud na kostce padne 1, ztrácí hráč všechny body v daném kole a nařadu se dostává druhý hráč.
- Hráč může zvolit "dost", což znamená, že všechny body nahrané v jeho kole se přičtou k jeho celkovým bodům
- Hra končí, jakmile jeden z hráčů dosáhne dopředu určeného počtu bodů (typicky 100 bodů).   

*/

let body;
let bodyVKole;
let aktivniHrac;
let kostka;
let koncoveBody;

body = [0, 0];
bodyVKole = 0;
aktivniHrac = 0;
koncoveBody = 25;

kostka = Math.floor(Math.random() * 6) + 1;

document.querySelector('#soucasne-' + aktivniHrac).textContent = kostka;
document.querySelector('.kostka').style.display = 'none';  


