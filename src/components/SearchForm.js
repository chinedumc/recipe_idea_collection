import React from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
const {setSearchTerm} = useGlobalContext()

const searchValue = React.useRef('')

React.useEffect(() => {
  searchValue.current.focus()
})

const searchRecipe = () => {
  setSearchTerm(searchValue.current.value)
}

const handleSubmit=(e)=> {
  e.preventDefault()
}

  return(
    <section className="section search">
     <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-control">
<label htmlFor="name">Search your favorite recipe</label>
<input type="text" id="name" placeholder="Enter an ingredient to get recipe ideas e.g. beef" ref={searchValue} onChange={searchRecipe}/>

      </div>
     </form>
    </section>
  )
}

export default SearchForm