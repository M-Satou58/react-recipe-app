import '../Styles/RecipeCard.css'
export const RecipeCard = ({ id, name, content, image }) => {
  return (
    <div className="recipe-container">
      <div className="recipe">
        <img src={image} alt="recipe" />
        <div className="text">
          <div>
           <h1>{name}</h1>
            <p>{content}</p>
          </div>
          <div>
            <a href={`/recipe/${id}`} >Check Recipe</a>
          </div>
        </div>

      </div>


    </div>
  )
}
