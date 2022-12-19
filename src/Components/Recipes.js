import { RecipeCard } from './RecipeCard'
import { MyRecipes } from '../MyRecipes'
import '../Styles/RecipeCard.css'
export const Recipes = () => {
  return (
    <div className="recipes-container">
      {MyRecipes.map((recipe, i) => {
        return (
        <RecipeCard 
          key={i}
          id={recipe.id}
          name={recipe.name} 
          content={recipe.content} 
          image={recipe.image}/>
        )

      })}
    </div>
  )
}
