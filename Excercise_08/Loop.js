
//   Using a loop, iterate through this array  and  console.log all of the people.




// a = "Matt";
// b = "Lill"

// nameid = ["Grey","James"]

// console.log (nameid.splice(0,2)); // .splice([array number],ordernumber)//(0,1,2,3...),(1,2,3....)
// console.log(nameid)
// console.log (nameid.push(a,b)); //add
// console.log(nameid)


// console.log (nameid.pop()); // remove last
// console.log(nameid)
// console.log (nameid.shift());// remove first
// console.log(nameid)

// arrayOfLetters.slice(0, n).concat(arrayOfLetters.slice(n+1))

// c =["Mary"];
// d=["Matt"];
// e=c.slice(0,1).concat(d.slice(0,1))
// console.log(e)

// f= e.concat(d.slice(0,2))
// console.log(f)

//Loop
n = ['Matt','lill','Mary','Grey','James']
for (i=0;i<n.length;i++){
   if (n[i]== 'Mary'){
    break
    }
    else console.log(n[i])
   }

//
s = ['purni','Matt','lill','Mary','Grey','James']
dummy = []
for (i=0; i<s.length; i++ ) {
    
    if (s[i] != 'Matt' & s[i] != 'Mary') {
        dummy.push(s[i])

    }
}
console.log(dummy)
