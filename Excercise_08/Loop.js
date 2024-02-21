
  // Using a loop, iterate through this array  and  console.log all of the people.


nameid = ["Grey","James"]
let a = "Matt";
let b = "Lill"

console.log (nameid.splice(0,2)); // .splice([array number],ordernumber)//(0,1,2,3...),(1,2,3....)
console.log(nameid)
console.log (nameid.push(a,b)); //add
console.log(nameid)

let nameid1 = ["Grey","James","Matt","Lill"]

console.log (nameid1.pop()); // remove last
console.log(nameid1)
console.log (nameid1.shift());// remove first
console.log(nameid1)


// arrayOfLetters.slice(0, n).concat(arrayOfLetters.slice(n+1))

let c =["Emile"];
let d =["Paige"];
let g =["Lisa"];
e = c.slice(0,1).concat(d.slice(0,1))
console.log(e)

f= e.concat(g.slice(0,2))
console.log(f)

//Loop
n = ['Matt','lill','Mary','Grey','James']
for (i=0;i<n.length;i++){
   if (n[i]== 'Mary'){
    break
    }
    else console.log(n[i])
   }


let s = ['purni','Matt','lill','Mary','Grey','James']
dummy = []
for (i=0; i<s.length; i++ ) {
    
    if (s[i] != 'Matt' & s[i] != 'Mary') {
        dummy.push(s[i])

    }
}
console.log(dummy)


let h = ['purni','Matt','lill','Mary','Grey','James']

console.log(h.indexOf('Matt'))
console.log(h.indexOf('Mary'))
console.log(h.indexOf('Foo'))

console.log(h.with.call('Foo', -1,0))


let y = ['Devon','Greg', "Mary", "James" ]
let z =["Elizabeth", "Artie"]
console.log(y.splice(0,1))
console.log(y)
console.log(y.concat(z.slice(0,2)))
console.log(y)
let k = ['Bob']
console.log(y.concat(k.slice(0,1)))



