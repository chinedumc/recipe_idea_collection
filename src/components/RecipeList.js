import { useGlobalContext } from "../context"
import Loading from "./Loading"
import Recipe from "./Recipe"


const RecipeList = () => {
const {recipes, loading} = useGlobalContext()
// console.log(recipes);
if (loading){
  return <Loading />
}

if (recipes.length < 1) {
  return(
    <h2 className="section-title">
      No recipe matched your search criteria
    </h2>
  )
}
  return (
    <section className="">
      <h1 className="recipe-heading">
        Recipes
      </h1>
      <div className="recipes-centre">
{
  recipes.map((item)  => {
    return <Recipe key={item.id} {...item} />
  })
}
      </div>
    </section>
  )
}

export default RecipeList