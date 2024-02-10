console.log("Hello World")

// To Find the area and perimeter of a Circle

function circleValue(r){
    var p = 2*r*Math.PI;
    var a = r*r*Math.PI;
    return "the perimeter and area of the circle is " +p +" and " +a
    
}
console.log(circleValue(6));


// To reverse a number
function reverseNum(n){
    n=n+"";
    return n.split("").reverse().join("");
}
console.log(reverseNum(12345));

// Count Number of Vowels in String
function countVowel(str){
    n=str.split("")
    a=0;
    vow=['a','e','i','o','u','A','E','I','O','U']
     for (i=0; i<n.length; i++) {
        if (vow.includes(n[i])) {
             a=a+1
        }   
    }
    return "Total Vowels in the given String is "+a
}

console.log(countVowel('Urnia'))

// Flatten array of arrays 

var a = [ ["a","b"],["c","e"] ];
  var n = a.reduce(
    function(prev, next) {
    return prev.concat(next);
  }
  );
console.log(n)

  var a = [ [4,7],[9,5] ];
  var n = a.reduce(
    function flattenArr(prev, next) {
    return prev.concat(next);
  }
  );
  
console.log(n)

// To check an input string is a palindrome

 function isPalindrome(y) {
    l = y.length;
    for ( i = 0; i < l / 2; i++){
    if (y[i] !== y[l- 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(isPalindrome('mfox')); 
  console.log(isPalindrome('refer')); 
  console.log(isPalindrome('racecar')); 


// To calculate simple interest based on the principle amount
// P = Principle ; R = Interest Rate in % ; T = Time in Year; SI simple interest
  function simpleInt(P,R,T){
       return SI = (P*R*T)/100 ;   
  }
  console.log(simpleInt(4900,2,3))


// To calculate compound interest based on the principle amount

  function compoundInt(p,r,n,t){

    return CI = (p * Math.pow((1 + (r/n)),(n*t))).toFixed(2);
 }
console.log(compoundInt(1000,0.04,4,3))


// To generate a random number
  function genRandom(c,b){
    return (Math.random(c) * b).toFixed(1);

 }
 console.log(genRandom(0,9))


// To find Factorial of a number 5!=5*4*3*2*1

function getFactorial(n){
   
   if(n==0){
       return 1; 
   }
   else{
    return n * getFactorial(n-1)
   }        
   
 }
console.log(getFactorial(5))


// To add unlimited numbers

function add() {
    
    var sum = 0;
    for (i = 0; i < arguments. length; i++) {
    sum += arguments[i];
    }
    return sum;
 }
    console. log(add(2, 3, 5));
    console. log(add(3, 7, 4, 6, 5));
    console. log(add(10, 7, 4, 9))


// To combine unlimited arrays

function addArrays(a,b,c){
    return a.concat(b,c)
    }
    console.log(addArrays([1,2],[3,4,5],[6,7,8,9]))

function addArraystr(a,b,c){
    return a.concat(b,c)
    }
    console.log(addArraystr(['H','e','l','l','o'],['New'],['World']))


//  To find the count of a letter in a string
 function letterCount(c){
    return c.length
 }
 console.log(letterCount("Radha"))

 
 // To check if a number is Prime
 function checkPrime(rnum){
    if (rnum <= 1 ) return false;
    for (i=2 ;i< rnum; i++){
        if (rnum % 2 == 0 ){
    return false
    }
}
    return true;
 }
 console.log(checkPrime(23))