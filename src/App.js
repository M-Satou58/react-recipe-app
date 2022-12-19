import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Recipes } from './Components/Recipes'
import { Recipe } from './Components/Recipe'
import { About } from './Components/About'
import { NotFound } from './Components/404'
import { BrowserRouter, Routes, Route, useHistory, useParams  } from "react-router-dom"
import './App.css';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes/>} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
