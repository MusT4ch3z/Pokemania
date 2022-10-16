import { useDispatch, useSelector } from "react-redux"
import { changeItemsToRenderAction } from "../../store/dataReducer"
import Item from "../Item/Item"
import { useEffect, useState } from "react"


const ItemList = () => {
   // const [isLoaded, setIsLoaded] = useState(false);
   // const dispatch = useDispatch()
   const itemsToRender = useSelector(state => state.dataReducer.itemsToRender)


   // if (isLoaded) {
   return (
      <div className="item_list card_list">
         {itemsToRender.map(item => <Item name={item.name} url={item.url} key={item.name} />)}
      </div>
   )
   // }
}

export default ItemList