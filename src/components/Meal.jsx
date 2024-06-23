import React, { useEffect, useState } from "react";

const Meal = ({ meal, index }) => {
    const [instructions, setInstructions] = useState(null);

    useEffect(() => {
        setInstructions(document.getElementById(`instructions${index}`));
    }, []);

    const handleClick = () => {
        if (instructions.className === "active") {
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
            <div className="mealInfo">
                <p>{meal.strArea}</p>
                <p>{meal.strCategory}</p>
            </div>
            <div className="instructions-container">
                <button onClick={() => handleClick()}>
                    Voir les instructions
                </button>
                <p id={`instructions${index}`} className="active">
                    {meal.strInstructions}
                </p>
            </div>
            <a href={meal.strSource} target="_blank">
                En savoir plus (Lien Externe)
            </a>
            <a href={meal.strYoutube} target="_blank">
                Voir la vidéo
            </a>
        </div>
    );
};

export default Meal;
