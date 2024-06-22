import React from "react";

const Meal = ({ meal }) => {
    return (
        <div className="meal">
            <div className="img-container">
                <img src={meal.strMealThumb} alt="" />
            </div>
            <h2>{meal.strMeal}</h2>
            <div className="mealInfo">
                <p>{meal.strArea}</p>
                <p>{meal.strCategory}</p>
            </div>
            <div className="instructions-container">
                <button>Voir les instructions</button>
                <div className="instructions">{meal.strInstructions}</div>
            </div>
            <a href={meal.strSource}>En savoir plus (Lien Externe)</a>
            <a href={meal.strYoutube}>Voir la vidéo</a>
        </div>
    );
};

export default Meal;
