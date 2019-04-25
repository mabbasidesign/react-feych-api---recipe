import React from 'react';
import './App.css';


const App = () => {

    const APP_ID = "6348b915";
    const APP_KEY = "f2f9356790918ea18bcac41a180af131";
    const exampleReq = `curl "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"`

    return ( 
        <div>
            
        </div>
     );
}

export default App;
