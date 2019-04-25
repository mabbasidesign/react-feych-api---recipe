import React from 'react';

const Recipe = ({title, calories, image, ingrediants}) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* <ol>
                {ingrediants.map(ingrediant => (
                    <li>{ingrediant.text}</li>
                ))}
            </ol> */}
            <h2>{calories}</h2>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;