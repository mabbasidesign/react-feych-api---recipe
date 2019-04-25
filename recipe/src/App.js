import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe';


const App = () => {

const APP_ID = "6348b915";
const APP_KEY = "f2f9356790918ea18bcac41a180af131";

const [recipes, setRecipes] = useState([]);

useEffect(() => {
    getRecipes();
}, []);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
}

    return ( 
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button 
                    className="search-button"
                    type="submit">
                Search
                </button>
            </form>
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.key}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                />
            ))}
        </div>
     );
}

export default App;
