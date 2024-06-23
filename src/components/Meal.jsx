import React, { useEffect, useState } from "react";

const Meal = ({ meal, index }) => {
    const [instructions, setInstructions] = useState(null);

    useEffect(() => {
        setInstructions(document.getElementById(`instructions${index}`));
    }, []);

    const handleClick = () => {
        if (instructions.classList.contains("active")) {
            instructions.style.display = "none";
        } else {
            instructions.style.display = "block";
        }

        instructions.classList.toggle("active");
    };

    return (
        <div className="meal">
            <div className="img-container">
                <img src={meal.strMealThumb} alt="" />
            </div>
            <h2>{meal.strMeal}</h2>
            <div className="meal-infos">
                <p>{meal.strArea}</p>
                <p>{meal.strCategory}</p>
            </div>
            <div className="instructions-container">
                <button onClick={() => handleClick()}>
                    Voir les instructions
                </button>
                <p id={`instructions${index}`} className="instructions">
                    {meal.strInstructions}
                </p>
            </div>
            <div className="links">
                <a href={meal.strSource} target="_blank">
                    En savoir plus (lien externe)
                </a>
                <a href={meal.strYoutube} target="_blank">
                    Voir la vidéo
                </a>
            </div>
        </div>
    );
};

export default Meal;
