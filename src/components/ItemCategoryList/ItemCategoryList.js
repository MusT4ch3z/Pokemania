import { useSelector } from "react-redux"
import Category from "../Category/Category"
import "./ItemCategoryList.css"

const ItemCategoryList = () => {
   const itemsCategory = useSelector(state => state.dataReducer.itemCategory)
   const isLoaded = useSelector(state => state.dataReducer.isLoaded)

   if (isLoaded) {
      return (
         <div className="category_list">
            <div className="category_list__title">Item Categories</div>
            <div className="category_list__body column">
               <ul>
                  {itemsCategory.results.map(i => <li><Category name={i.name} key={i.name} url={i.url} /></li>)}
               </ul>
            </div >
         </div>
      )
   }
}

export default ItemCategoryList