import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeItemsToRenderAction } from "../../store/dataReducer";
import ItemCategoryList from "../ItemCategoryList/ItemCategoryList"
import ItemList from "../ItemList/ItemList"


const ItemsPage = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch()
    const itemsToRender = useSelector(state => state.dataReducer.itemsToRender)

    useEffect(() => {

        const url = "https://pokeapi.co/api/v2/item-category/1"
        console.log("item to render change")
        fetch(url).then(res => res.json()).then(json => { dispatch(changeItemsToRenderAction(json.items)); setIsLoaded(true) })

    }, []);

    if (isLoaded) {
        return (
            <div className="items_page row">
                <ItemCategoryList />
                <ItemList />
            </div>
        )
    }
}

export default ItemsPage