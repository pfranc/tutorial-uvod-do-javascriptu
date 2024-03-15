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

document.getElementById('body-0').textContent = 0;
document.getElementById('body-1').textContent = 0;
document.getElementById('soucasne-0').textContent = 0;
document.getElementById('soucasne-1').textContent = 0;

document.querySelector('.kostka').style.display = 'none';  

document.querySelector('.tlacitko-hod').addEventListener('click', function() {
    // 1. Náhodné číslo
    kostka = Math.floor(Math.random() * 6) + 1;

    // 2. Zobrazit výsledek
    let kostkaDOM = document.querySelector('.kostka');
    kostkaDOM.style.display = 'block';
    kostkaDOM.textContent = kostka;

    // 3. Aktualizovat body kola pokud padla/nepadla 1

});