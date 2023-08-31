import React from "react";

function RecipeList({setRecipes, recipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const deleteRecipe = (index) => {
    const newRecipes = recipes.filter((blank, i) => i !== index);
    setRecipes(newRecipes);
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
recipes.map((recipe, index)=>(
  <tr>
  <td>
    <p>{recipe.name}</p>
  </td>
  <td>
    <p>{recipe.cuisine}</p>
  </td>
  <td>
    <img src={recipe.photo} alt="recipe photo"/>
  </td>
  <td>
    <p>{recipe.ingredients}</p>
  </td>
  <td>
    <p>{recipe.preparation}</p>
  </td>
  <td><button name="delete" onClick={() => deleteRecipe(index)}>
            Delete
          </button></td>
  </tr>
))

          }
         
        
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
