// Funkce
function pozdrav() {
	console.log("Hello world");
}

//pozdrav();

function secti(cislo1, cislo2) {
	let soucet = cislo1 + cislo2;
	return soucet;
}

// console.log(secti(5, 8));

function obarviNaCerveno() {
	// ziskat element obdelniku
	let obdelnik = document.querySelector('.obdelnik');

	// obarvit na cerveno
	obdelnik.style.backgroundColor = "darkred";
}

// obarviNaCerveno();

// Úkol 1 — Znovupoužitelnost
// Uprav a přejmenuj funkci obarviNaCerveno() tak aby brala jeden argument (string),
// kde bude jméno, hex kód, nebo rgb() barvy, na kterou chceme obdelník obarvit

// Úkol 2 - Kalkulačka
// Napiš funkci kalkukalčka, která bude brát 2 argumenty (čísla).
// Funkce bude dále brát od uživatele jaký druh matematické operace má provést nad čísly,
// které jsme funkci předali (stačí když uživatel zadá znaménko perace, např.: * nebo -).
// Pomocí if-else bloku zjisti, kterou operaci je nutno provést a vrať správný výsledek,
// který vyskočí, v hlášce, užiivateli pomocí funkce alet().

// Události

let ctverec = document.querySelector('.ctverec');
let obdelnik = document.querySelector('.obdelnik');

ctverec.addEventListener('click', function() {
	ctverec.classList.toggle('kruh');
});

obdelnik.addEventListener('mouseenter', function() {
	obdelnik.style.backgroundColor = '#ff4242';
});

obdelnik.addEventListener('mouseleave', function() {
	obdelnik.style.backgroundColor = 'white';
});

window.addEventListener('keydown', function(udalost) {
	if (udalost.key === " ") {
		obdelnik.classList.toggle('otoc');
	}
	console.log(udalost.key);
});

// Úkol 3 - volný
// Upravit si HTML a CSS, přidat si svoje vlastní elementy a styly.
// Poté jim vdechnout trochu života pomoc JS a reagovat na různé události.

