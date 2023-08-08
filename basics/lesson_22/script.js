let single = 'single-quoted';

let double = "double-quoted";

let backticks = `backticks`;


function add(a, b) {
    alert(`Sum of a and b: ${a + b}`);
}

add(3, 4);


let guests = `Gue'sts:
*John
*Pete
*Mary
`;

alert(guests);


let guestList = "Guests:\n*John\n*Pete\n*Mary";

alert(guestList);

// Character 	Description
// \n 	        New line
// \r 	        In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
// \', \", \` 	Quotes
// \\ 	        Backslash
// \t 	        Tab
// \b, \f, \v 	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

alert(`The back slash: \\`);

alert("I'm Batman! =)");

let someString = "Hello from script.js";

alert(someString.length);   //Length of string.

let word = "Name";

alert(word.charAt(0));
alert(word.charAt(1));
alert(word[2]);
alert(word[3]);

for(let char of word){
    alert(char);
};  

let game = "Fifa";

alert(game.toUpperCase());
alert(game.toLowerCase());

function ucFirst(word){
    if(!word){
        alert("Bad input");
        return "0";
    }else{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }



}

alert(ucFirst("superman"));