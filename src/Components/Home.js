import { Slideshow } from './Slideshow'
import '../Styles/Home.css'

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-body">
        <div className="left">
          <h1>LEARN HOW TO MAKE OUR FAMOUS FILIPINO DISHES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus porta lobortis. </p>
          <a href="/recipes">Check Recipes</a>
        </div>
        <div className="right">
          <Slideshow /> 
        </div>
      </div>
      <h2>EXTRAORDINARY TASTE AND EXPERIENCE</h2>
    </div>
  )
}
