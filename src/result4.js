const fetch = require('node-fetch');

 const result4 = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g")
  .then(result => result.json())
  .then(data => {
    const {drinks} = data;
    const filter = drinks.filter ( drinks =>  drinks.strIngredient4 != null);
    const result = filter.map ( drinks => {
      
        return {
            name: drinks.strDrink,
            id: drinks.idDrink,
            ingredients: [
              {
                name: drinks.strIngredient1,
                quantity: drinks.strMeasure1 
      
              }, 
              {
                name: drinks.strIngredient2,
                quantity: drinks.strMeasure2 
      
              }, {
                name: drinks.strIngredient3,
                quantity: drinks.strMeasure3
      
              }, {
                name: drinks.strIngredient4,
                quantity: drinks.strMeasure4
      
              }
               ]
        };
      
      });
      
      return console.log(`
      Cocktails  with quantities:
      ${JSON.stringify(result)}`);
     
    

  })
  
  
  module.exports = result4; 