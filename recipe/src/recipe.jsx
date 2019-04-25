import React from 'react';

const Recipe = ({title, calories, image, ingrediants}) => {
    return (
        <div className="recipe-wrapper">
            <h2>{title}</h2>
            {/* <ol>
                {ingrediants.map(ingrediant => (
                    <li>{ingrediant.text}</li>
                ))}
            </ol> */}
            <h3>{calories}</h3>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;