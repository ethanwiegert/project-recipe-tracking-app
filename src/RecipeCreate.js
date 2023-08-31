import React, { useState } from "react";

function RecipeCreate({setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

    
  const [name, setName] = useState("");
  const handleNameChange=(event)=>setName(event.target.value);

  const [cuisine, setCuisine] = useState("");
  const handleCuisineChange=(event)=>setCuisine(event.target.value);
  
  const [photo, setPhoto] = useState("");
  const handlePhotoChange=(event)=>setPhoto(event.target.value);

  const [ingredients, setIngredients] = useState("");
  const handleIngredientsChange=(event)=>setIngredients(event.target.value);

  const [preparation, setPreparation] = useState("");
  const handlePreparationChange=(event)=>setPreparation(event.target.value);

  const submitHandler =(event)=> {
    event.preventDefault();
    setRecipes(recipes => [...recipes, {name, cuisine, photo, ingredients, preparation}])
    
  }


  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
             <label htmlFor="name">Name:</label> 
             <input id="name" name="name" type="text" value={name} onChange={handleNameChange}/>
            </td>
            <td>
            <label htmlFor="cuisine">Cuisine:</label> 
             <input id="cuisine" name="cuisine" type="text" value={cuisine} onChange={handleCuisineChange}/>
            </td>
            <td>
            <label htmlFor="photo">Photo:</label> 
             <input id="photo" name="photo" type="url" value={photo} onChange={handlePhotoChange}/>
            </td>
            <td>
            <label htmlFor="ingredients">Ingredients:</label> 
             <textarea id="ingredients" name="ingredients" type="text" value={ingredients} onChange={handleIngredientsChange}/>
            </td>
            <td>
            <label htmlFor="preparation">Preparation:</label> 
             <textarea id="preparation" name="preparation" type="text" value={preparation} onChange={handlePreparationChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
