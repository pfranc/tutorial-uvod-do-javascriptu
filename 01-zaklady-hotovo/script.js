// console.log("Hello World!!!");

// let vek = 84;

// let jmeno;
// jmeno = "Paramix";

// alert("Jmenuji se " + jmeno + " a je mi " + vek + " let.");

// let asterixuvVek = prompt("Zadej Asterixův věk");
// console.log(asterixuvVek);


let asterixVaha = 55;
let obelixVaha = 130;

if (asterixVaha > obelixVaha) {
	console.log("Asterix je těžší než Obelix");
} else if (obelixVaha > asterixVaha) {
	console.log("Obelix je těžší než Asterix");
} else {
	console.log("Oba dva váží stejně");
}


// Úkol č. 3
// 1) Vytvoř proměnné s věkem Asterixe a Obelixe, sečti je (případně ulož do další proměnné)
//    a porovnej jestli jsou starší než Panoramix jehož věk je 84 let (nezapomeň,
//    že naši dva galové můžou být dohromady stejně staří jako druid)


// for (let i = 1; i < 5; i++) {
// 	console.log(i + ". říman");
// }


let opakuj = true;
while (opakuj) {
	let hod = Math.ceil(Math.random() * 6);
	console.log(hod);

	if (hod == 6) {
		opakuj = false;
	}
}


// Úkol č.4
// 1) Napiš cyklus (for nebo while) který vypííše čsla od 10 do 1

// Úkol č.5
// 1) Vytvoř si dvě proměnné a do každé ulož číslo, které budou značit začátek nebo konec
//    nějakého intervalu čísel (např.: interval od 8 do 13 je "8, 9, 10, 11, 12, 13")
// 2) Napiš cyklus (for nebo while) který vypíše sudá čísla v tomto zvoleném intervalu
