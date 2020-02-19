/**
 * Your order, please.
 *
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 */

function order(words){
    return words.split(' ').sort((a, b) => +a.match(/\d/g) - +b.match(/\d/g)).join(' ');
  }
  
  order("is2 Thi1s T4est 3a")