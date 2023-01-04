import SearchForm from "../components/SearchForm"
import RecipeList from "../components/RecipeList"
const Home = () => {

  return (
		<main>
			<h2 className="section-title">Find Meals For Your Ingredients</h2>
			<blockquote>
				Real food doesn't have ingredients, real food is ingredients. <br />
				<cite>- Jamie Oliver</cite>
			</blockquote>
			<SearchForm />

			<h2 className="results-title">Your Search Results:</h2>
			<RecipeList />
		</main>
		
	);
}

export default Home