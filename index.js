const firstPassword = document.getElementById('first-password')
const secondPassword = document.getElementById('second-password')
const passwordLenElement = document.getElementById('password-length')

const numbersAllowed = document.getElementById('numbers')
const uppercaseAllowed = document.getElementById('uppercase')
const lowercaseAllowed = document.getElementById('lowercase')
const sybmolsAllowed = document.getElementById('symbols')


let passwordLength = passwordLenElement.value;

passwordLenElement.addEventListener("change", function() {
    passwordLength = passwordLenElement.value
});

firstPassword.addEventListener('click', async () => 
	await navigator.clipboard.writeText(firstPassword.textContent)

);
secondPassword.addEventListener('click', async () => 
	await navigator.clipboard.writeText(secondPassword.textContent)
);

function arrayMerge() {   //building 

    let characters = []

    if(numbersAllowed.checked)
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    if (uppercaseAllowed.checked)
        characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    if(lowercaseAllowed.checked)
        characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    if(sybmolsAllowed.checked)
        characters.push("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/")

    if(!numbersAllowed.checked && !uppercaseAllowed.checked && !lowercaseAllowed.checked && !sybmolsAllowed.checked) {
        
        uppercaseAllowed.checked = true
        lowercaseAllowed.checked = true
        numbersAllowed.checked = true
        sybmolsAllowed.checked = true
    }

    return characters
}

function generatePassword() {
    let password = '';
    let charsArr = arrayMerge()
    for (let i = 0; i < passwordLength; i++) {
        password += charsArr[Math.floor( Math.random() * charsArr.length)]; 
    }

    return password
}

function generate() {
    firstPassword.textContent = generatePassword()
    secondPassword.textContent = generatePassword()
}


