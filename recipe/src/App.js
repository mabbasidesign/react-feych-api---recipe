import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {

const APP_ID = "6348b915";
const APP_KEY = "f2f9356790918ea18bcac41a180af131";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');


useEffect(() => {
    getRecipes();
}, [query]);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
}

const updateSearch = (e) => {
    setSearch(e.target.value);
    // setQuery(search);
}

const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

    return ( 
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button 
                    className="search-button"
                    type="submit">
                Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        key="id"
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingrediants={recipe.recipe.ingrediants}
                    />
                ))}
            </div>
        </div>
     );
}

export default App;
