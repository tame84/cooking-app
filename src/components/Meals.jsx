import React from "react";
import Meal from "./Meal";

const Meals = ({ meals }) => {
    return (
        <div className="meals-container">
            <ul className="meals">
                {meals.map((meal) => (
                    <Meal key={meal.strMeal} meal={meal} />
                ))}
            </ul>
        </div>
    );
};

export default Meals;
