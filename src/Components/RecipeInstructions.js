import '../Styles/RecipeInstructions.css'
export const RecipeInstructions = ({ingredients, directions}) => {
  return (
    <div className="recipe-instruction-container">
      <div className="ingredients-container">
        <h1>Ingredients:</h1>
        <ul>
          {ingredients.map((ingredient, i) => {
            return (
              <li key={i}>
                <input type="checkbox" checked="true" />
                <span>{ingredient}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="directions-container">
        <h1>Directions:</h1>
        <ul>
        {directions.map((direction, i) => {
          return (
          <li key={i}>
            <p><span>{i+1}.</span> {direction}</p>
          </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}
