import React from "react";
import Meal from "./Meal";

const Meals = ({ meals }) => {
    return (
        <div className="meals-container">
            <ul className="meals">
                {meals
                    ? meals.map((meal, index) => (
                          <Meal key={meal.strMeal} meal={meal} index={index} />
                      ))
                    : "Nous n'avons pas réussi à trouver de plats avec ce nom."}
            </ul>
        </div>
    );
};

export default Meals;
