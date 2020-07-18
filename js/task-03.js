/*  Напиши фукцнию findLongestWord(string), которая принимает параметром 
произвольную строку (в строке будут только слова и пробелы) 
и возвращает самое длинное слово в этой строке. */

'use strict';

const findLongestWord = function (string) {

  const arrayFromString = string.split(' ');
   
  for (let i = 1; i < arrayFromString.length; i += 1) {
    if (arrayFromString[i].length > arrayFromString[0].length) { 
      arrayFromString[0] = arrayFromString[i]; 
    }
  };
  return arrayFromString[0];
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'