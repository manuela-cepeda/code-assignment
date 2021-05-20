const fetch = require('node-fetch');

const result5 = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g")
  .then(result => result.json())
  .then(data => {
    const {drinks} = data;
    //Alcoholic  / Non-alcoholic cocktails:
 const filterAlc = drinks.filter ( drinks =>  drinks.strAlcoholic == "Alcoholic");
 const resultAlc = filterAlc.map ( drinks => {
      
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


// Non-alcoholic cocktails:
const filterNonAlc = drinks.filter ( drinks =>  drinks.strAlcoholic != "Alcoholic");
const resultNonAlc = filterNonAlc.map ( drinks => {
     
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
  Cocktails with Alcohol: 
  ${JSON.stringify(resultAlc)}
  
  Non-alcoholic cocktailS: 
  ${JSON.stringify(resultNonAlc)}
  `)


    

  })

  module.exports = result5; 