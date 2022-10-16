import { useDispatch } from "react-redux"
import { changeItemsToRenderAction } from "../../store/dataReducer"
import "./Category.css"

const Category = ({ name, url }) => {
   name = name.replace(/-/g, ' ').replace(/\b[\w]/g, letter => letter.toUpperCase())
   const dispatch = useDispatch()

   const handleChangeCategory = () => {
      fetch(url).then(res => res.json()).then(json => { dispatch(changeItemsToRenderAction(json.items))})
   }

   return (
      <div className="category" onClick={handleChangeCategory}>
         {name}
      </div>
   )
}

export default Category