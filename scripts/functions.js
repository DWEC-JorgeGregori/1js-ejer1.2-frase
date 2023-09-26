'use strict'

function letters(cadena) {
	return cadena.length;
}

function words(cadena) {
	return cadena.split(' ').length;
}

function upperString(cadena) {
	return cadena.toUpperCase();
}

function titleString(cadena) {
	let palabras = cadena.split(' ');
	palabras = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1));
	return palabras.join(" ");
}

function backwardsLetters(cadena) {
	return cadena.split("").reverse().join("");
}

function backwardsWords(cadena) {
	return cadena.split(" ").reverse().join(" ");
}

function palindrome(cadena) {
	cadena = cadena.toLowerCase().replace(/ /g,'');
	return cadena === backwardsLetters(cadena); 
}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome,
  };