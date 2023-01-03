import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleRecipe = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [recipe, setRecipe] = useState(null)

	useEffect(()=>{
setLoading(true)
async function getRecipe() {
try {
	const response = await fetch(`${url}${id}`)
	const data = await response.json()
	// console.log(data.meals[0]);
	if (data.meals){
const {idMeal:id, strMeal:name, strCategory:category,strInstructions:instructions, strMealThumb:image, strYoutube:video} = data.meals[0]
const newRecipe = {id, name, category, instructions, image, video}
setRecipe(newRecipe)
	}else {
		setRecipe(null)
	}
	setLoading(false)
} catch (error) {
	console.log(error);
	setLoading(false)
}
}
getRecipe()
	},[id])
	if(loading){
		<Loading />
	}
	if(!recipe){
		return <h2 className="section-title">No recipe to display</h2>
	}

	const { name, category, instructions, image, video } = recipe
	return (
		<section className="section recipe-section">
			<Link to="/" className="btn btn-primary">
				Back Home
			</Link>
			<h2 className="section-title">{name}</h2>
			<div className="meal">
				<img src={image} alt={name} />
				<div className="meal-info">
					<p>
						<span className="meal-data">Name: </span>
						{name}
					</p>
					<p>
						<span className="meal-data">Category: </span>
						{category}
					</p>
					<p>
						<span className="meal-data">Instructions: </span>
						{instructions}
					</p>
					<p>
						<span className="meal-data">Video: </span>
						<a className="meal-link" href={video}>Click To Watch</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleRecipe;
