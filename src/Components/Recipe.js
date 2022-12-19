import { RecipeInstructions } from '../Components/RecipeInstructions'
import { useHistory, useParams } from 'react-router-dom'
import { MyRecipes } from '../MyRecipes'
import '../Styles/Recipe.css'

export const Recipe = () => {
  const { id } = useParams()
  const recipe = MyRecipes[id - 1]
  return (
    <div className="container">
    <div className="recipe-container">
      <div className="left">
        <img src={recipe.image} />
      </div>
      <div>
        <div className="right">
          <div className="content-1">
            <h1>{recipe.name}</h1>
            <p>{recipe.content}</p>
          </div>
          <div className="content-2">
            <h1>What is {recipe.name}?</h1>
            <p>{recipe.content2}</p>
          </div>
        </div>
      </div>
    </div>
      <RecipeInstructions ingredients={recipe.ingredients} directions={recipe.directions}/>
    </div>
  )
}
