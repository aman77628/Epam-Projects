// Question-1 ----->
function isEquals(a, b) {
    return Object.is(a, b);
  }
  
// Question-2 ----->

function isBigger(a,b){
return a>b;
}
// Question-3 ----->

function storeNames(...names) {
    return names;
  }
// Question-4 ----->

function getDifference(a, b) {
    if (a < b) {
      [a, b] = [b, a]; // Swapping values using destructuring assignment
    }
    return a - b;
  }
// Question-5 ----->

function negativeCount(arr) {
    return arr.filter(num => num < 0).length;
  }
// Question-6 ----->

function letterCount(str1, str2) {
    return str1.split(str2).length - 1;
  }
// Question-7 ----->
  
  function countPoints(scores) {
    let points = 0;
    for (let i = 0; i < scores.length; i++) {
      const [x, y] = scores[i].split(':').map(Number);
      if (x > y) {
        let pt=3;
        points += pt;
      } else if (x === y) {
        points += 1;
      }
    }
    return points;
  }
  
