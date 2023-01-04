import { Link } from "react-router-dom"

const Recipe = ({name, id, image}) => {

  return (
    <article className="recipe">
      <div className="img-container">
      <img src={image} alt={name} />
      </div>
      <div className="recipe-footer">
      <h4>{name}</h4>
      <Link to={`/recipe/${id}`} className="btn btn-primary btn-details">
       Recipe Details
      </Link>
      </div>
    </article>
  )
}

export default Recipe