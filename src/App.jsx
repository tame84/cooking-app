import React, { useEffect, useState } from "react";
import Meals from "./components/Meals";
import axios from "axios";

const App = () => {
    const [mealsData, setMealsData] = useState([]);
    const [searchData, setSearchData] = useState("beef");

    useEffect(() => {
        axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                    searchData
            )
            .then((res) => setMealsData(res.data.meals));
    }, [searchData]);

    return (
        <div>
            <header>
                <h1>Cooking App</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Nom de plat en anglais"
                        onChange={(e) => setSearchData(e.target.value)}
                    />
                </form>
            </header>
            <Meals meals={mealsData} />
        </div>
    );
};

export default App;
