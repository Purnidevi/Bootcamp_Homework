
//The Fortune Teller
function tellFortune(job,loca,spouse,kids){
   
    console.log("You will be a "+job+ " in "+loca+", and married to "+spouse +" with "+kids+" kids.");
       
    }
    tellFortune('Builder','Newyork','Ram',"3");
    

// The Puppy Age Calculator

console.log('one human year = 7 dog year')

function calculateDogAge(dogage){
    h=7*dogage;
    console.log("Your doggie is "+h+" years old in dog years!");
}
calculateDogAge(7);
calculateDogAge(14);
calculateDogAge(21);


//The Lifetime Supply Calculator

function calculateSupply(age,amount){
    maxage=70;
    remainingage=maxage-age;
    calc=remainingage*365*amount;
    console.log("You will need "+calc+" to last you until the ripe old age of "+maxage);

}
calculateSupply(60,20);
calculateSupply(40,10);
calculateSupply(20,36);

//The Geometrizer

function calcCircumfrence(r){
    radius=r;
    c=2*3.14*r;
    msg4="The circumference is "+c;
    console.log(msg4);
    calcArea(r)
}
calcCircumfrence(3);


function calcArea(r){
    radius=r;
    a=3.14*r*r;
    msg5="The area is "+ a;
    console.log(msg5);
}

//The Temperature Converter

function celsiusToFahrenheit(ct){
    var celsius= ct;
    f= (ct * 9 / 5) + 32;
    msg5=ct+"°C is "+f+ "°F";
    console.log(msg5);

}
celsiusToFahrenheit(1);

function FahrenheitTocelsius(ft){
    var Fahrenheit = ft;
    c= (ft - 32) * 5 / 9;
    msg=ft+"°F is "+c+ "°C";
    console.log(msg);

}
FahrenheitTocelsius(1);




