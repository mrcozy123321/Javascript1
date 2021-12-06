/*
  Variabler

  variabel = någonting vi lagrar information i
  
  camelCase   =   JavaScript, Java, C, C++
  Pascal      =   C#, Pascal
  _private    =   en variabel som bara lever inom en viss del
  
  
  ex. firstName, lastName, email, postalCode, city01

  _firstName = 'Daniel'

*/


firstName = 'Daniel';      // global deklarering (Gör inte såhär)
var firstName = 'Daniel';  // global deklarering (Gör inte såhär)


let lastName = 'Mrkoci'    // lokal deklarering (Gör såhär!)
lastName = 'Andersson';

const pi = 3.14;
// pi = 5;

console.log(firstName);
console.log(lastName);
console.log(pi);

/*
  Deklarera variabler
  -------------------------------------------------

  var = global variabel - accessbar överallt i koden
  let = lokal variabel - accessbar inom det angivna området
  const = lokal variabel (konstant) - kan inte skrivas över (undantag finns)


  C# exempel.
    string name = 'Daniel';
    int age = 21;
  
  JS 
    let name = 'Daniel';
    let age = 35;
    
  */