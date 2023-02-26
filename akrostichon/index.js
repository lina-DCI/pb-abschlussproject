/* 
func die einen namen "string" als argument annimmt.
func die für jeden buchstaben aus einem string eine textzeile ausgibt die mit dem buchstaben beginnt -d.
texzeilen für jeden buchstaben im alphabet -d.
func mit zufallswahl aus array von mehreren strings bei häufigen buchstaben
*/
console.clear();

const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Verrätst Du mir Deinen Vornamen? ");
let inputString = name;

const inputArr = inputString.toLowerCase().replace(/\s|\d/g, "").split("");

console.log("\n");
console.log(`Was für ein schöner Name, ${name.toUpperCase()} 💜`);
console.log("\n");

// random gedichtzeile
function chooseRandom(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

// akrostichon generieren
function akrostichon() {
    let output = "";
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === "a") {
            output +=
                "A - " +
                chooseRandom([
                    "Alle Herzen fliegen Dir zu\n",
                    "Amseln singen, wenn Du vorbei gehst\n",
                    "Außerordentlich attraktiv\n",
                    "Aber Dich gibt's nur einmal\n",
                ]);
        } else if (inputArr[i] === "b") {
            output +=
                "B - " +
                chooseRandom([
                    "Beliebt bei Bienen\n",
                    "Befreundest Dich leicht\n",
                    "Besonders aufmerksam\n",
                ]);
        } else if (inputArr[i] === "c") {
            output +=
                "C - " +
                chooseRandom(["Charismatisches Lächeln\n", "Charmante Art\n"]);
        } else if (inputArr[i] === "d") {
            output += "D - " + "Du hast viele Talente\n";
        } else if (inputArr[i] === "e") {
            output +=
                "E - " +
                chooseRandom([
                    "Einzigartig finden Dich alle\n",
                    "Ebnest Dir Deinen Weg\n",
                    "Edel, hilfreich und gut\n",
                    "Erfindungsgeist ist Dir zueigen\n",
                ]);
        } else if (inputArr[i] === "f") {
            output += "F - " + "Fotogen sind Deine Gene\n";
        } else if (inputArr[i] === "g") {
            output += "G - " + "Gern gesehner Partygast\n";
        } else if (inputArr[i] === "h") {
            output +=
                "H - " +
                chooseRandom([
                    "Hilfst älteren Damen über die Straße\n",
                    "Heißer Feger\n",
                    "Herz aus Gold\n",
                ]);
        } else if (inputArr[i] === "i") {
            output +=
                "I - " +
                chooseRandom([
                    "Immer ein Ohr zum Zuhören\n",
                    "Insider schwören auf Dich\n",
                    "Immens großzügig\n",
                ]);
        } else if (inputArr[i] === "j") {
            output += "J - " + "Jeder will Dein Chilirezept\n";
        } else if (inputArr[i] === "k") {
            output += "K - " + "Kann sein, Du bist perfekt\n";
        } else if (inputArr[i] === "l") {
            output +=
                "L - " +
                chooseRandom([
                    "Langeweile kennst Du nicht\n",
                    "Liebst das Leben\n",
                    "Leise Töne liegen Dir\n",
                    "Lauter gute Ideen\n",
                ]);
        } else if (inputArr[i] === "m") {
            output +=
                "M - " +
                chooseRandom([
                    "Mit Dir kann man Pferde stehlen\n",
                    "Machst immer das beste draus\n",
                    "Meilen vor allen Anderen\n",
                ]);
        } else if (inputArr[i] === "n") {
            output +=
                "N - " +
                chooseRandom([
                    "Niemand ist so schlau wie Du\n",
                    "Nimmst Dir Zeit für Freunde\n",
                    "Nascht nachts Nüsse\n",
                ]);
        } else if (inputArr[i] === "o") {
            output += "O - " + "Obendrein ein Schatzilein\n";
        } else if (inputArr[i] === "p") {
            output += "P - " + "Phantasie liegt in Deiner Natur\n";
        } else if (inputArr[i] === "q") {
            output +=
                "Q - " +
                chooseRandom([
                    "Quatsch machst Du jeden mit\n",
                    "Querfeldein, Dein Weg\n",
                ]);
        } else if (inputArr[i] === "r") {
            output +=
                "R - " +
                chooseRandom([
                    "Richtig gut, wie Du das machst\n",
                    "Reist gerne in Gedanken\n",
                    "Ruhe liegt in Dir\n",
                ]);
        } else if (inputArr[i] === "s") {
            output += "S - " + "Sehr gut schaust' aus, Spatzl\n";
        } else if (inputArr[i] === "t") {
            output +=
                "T - " +
                chooseRandom([
                    "Trübsal blasen ist Dir fremd\n",
                    "Teilst deinen letzten Schokoriegel\n",
                    "Tiefsinnige Gedanken\n",
                ]);
        } else if (inputArr[i] === "u") {
            output += "U - " + "Umwerfend lustig, Deine Witze\n";
        } else if (inputArr[i] === "v") {
            output += "V - " + "Von Dir werden wir noch hören\n";
        } else if (inputArr[i] === "w") {
            output += "W - " + "Wenn Du lachst geht die Sonne auf\n";
        } else if (inputArr[i] === "x") {
            output += "X - " + "X-factor, Du hast ihn\n";
        } else if (inputArr[i] === "y") {
            output += "Y - " + "Yes - Du sagst ja zum Leben\n";
        } else if (inputArr[i] === "z") {
            output += "Z - " + "Zauberhaft, wie Du tanzt\n";
        }
    }
    return output;
}
console.log(akrostichon());

console.log("❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️");
console.log("\n");




