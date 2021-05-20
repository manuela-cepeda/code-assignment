const fetch = require('node-fetch');

 const result3 = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g")
  .then(result => result.json())
  .then(data => {
    const {drinks} = data;
    const filter = drinks.filter ( drinks =>  drinks.strIngredient4 != null);
    const result = filter.map ( drinks => {
      
        return {
            name: drinks.strDrink,
            id: drinks.idDrink,
            ingredient: [drinks.strIngredient1, drinks.strIngredient2, drinks.strIngredient3, drinks.strIngredient4 ]
        };
     
    });
    
    return console.log(`Cocktails beginning with G with 4 ingredients by ID/Name/Ingredients:
    ${JSON.stringify(result)}`);
    
    

  })

  module.exports = result3; 
  
