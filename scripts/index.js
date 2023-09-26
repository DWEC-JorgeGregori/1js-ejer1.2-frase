'use strict'


let frase = prompt("introduce una frase");
if (frase.trim() === "") {
    console.log("Has de introducir una cadena válida");
} else {
    console.log("Frase: " + "\"" + frase + "\"");
    console.log(letters(frase) + " letras y " + words(frase) + " palabras");
    console.log(upperString(frase));
    console.log(titleString(frase));
    console.log(backwardsLetters(frase));
    console.log(backwardsWords(frase));
    let isPalindrome = palindrome(frase)?"Si":"No";
    console.log(isPalindrome + " es palíndromo");
}