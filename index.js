// ---generate two random passwords
// ---each should be 15 characters long
// ---------bonus----------
// -ability to set password length
// -add copy-on-click button
// -toggle symbols and numbers to off/on

const characterss = {
    capChars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    chars:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialSymbols: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
}
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
       "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const firstPassword = document.getElementById('first-password')
const secondPassword = document.getElementById('second-password')
const passwordLenElement = document.getElementById('password-length')

let passwordLength = 15;

passwordLenElement.addEventListener("change", function() {
    passwordLength = passwordLenElement.value
});

firstPassword.addEventListener('click', async () => 
	await navigator.clipboard.writeText(firstPassword.textContent)

);
secondPassword.addEventListener('click', async () => 
	await navigator.clipboard.writeText(secondPassword.textContent)
);

function generatePassword() {
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        password += characters[Math.floor( Math.random() * characters.length)]; 
    }

    return password
}

function generate() {
    firstPassword.textContent = generatePassword()
    secondPassword.textContent = generatePassword()
}
