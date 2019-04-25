import React,{useEffect, useState} from 'react';
import './App.css';


const App = () => {

const APP_ID = "6348b915";
const APP_KEY = "f2f9356790918ea18bcac41a180af131";

const [counter, setCounter] = useState(0);
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    getRecipes();
}, []);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    console.log(data.hits);
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
                <h1 onClick={() => setCounter(counter + 1)}> {counter} </h1>
            </form>
        </div>
     );
}

export default App;
