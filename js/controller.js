const { error } = require("console");

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecepie = async function () {

  try {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);
    const data = await response.json();
    console.log(response, data);

    // if there is some error with the link in fetch call
    if (!response.ok) throw new Error(`${data.message} ${response.status}`);
    // to reformat the naming of elements, for better variable names, in the data
    // since in the data we have an element named data, so data.data
    let { recipe } = data.data;
    console.log('with original names', recipe);// or recipe = data.data.recipe
    recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    console.log('With new names', recipe);


  } catch (err) {
    console.log(err);
  }

};

showRecepie();