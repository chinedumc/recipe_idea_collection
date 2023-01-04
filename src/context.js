import React, { useContext, useEffect, useState } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("beef");
	const [recipes, setRecipes] = useState([]);

	const fetchRecipe = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			// console.log(data);
			const { meals } = data;

			if (meals) {
				const newRecipes = meals.map((item) => {
					const { idMeal, strMeal, strMealThumb } = item;
					return { id: idMeal, name: strMeal, image: strMealThumb };
				})
        setRecipes(newRecipes)
			} else {
				setRecipes([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRecipe();
	}, [searchTerm]);
	return (
		<AppContext.Provider value={{ loading, recipes, setSearchTerm }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };