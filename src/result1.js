const fetch = require('node-fetch');

 const result1= fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g")
  .then(result => result.json())
  .then(data => {
    const {drinks} = data;
   const result = drinks.map ( drinks => {
    const cocktail = drinks.strDrink;
    return cocktail;
  });
  const total = result.length;

  return console.log(`
  Cocktails beginning with G:
  Total: ${total}
  Names: ${result}
  ` );    
   
    

  })

  module.exports = result1; 




  
  
    