const fetch = require('node-fetch');

const result2 = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g")
  .then(result => result.json())
  .then(data => {
    const {drinks} = data;
    const filter = drinks.filter ( drinks =>  drinks.strIngredient4 != null);
    const result = filter.map ( drinks => {
      const cocktail = drinks.strDrink;
      return cocktail;
});

return console.log(`
Cocktail beginning with G with 4 ingredients:
${result}`);
  
    

  })

  
  module.exports = result2; 
  

