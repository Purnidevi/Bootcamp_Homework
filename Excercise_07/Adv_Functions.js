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