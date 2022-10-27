import { useDispatch, useSelector } from "react-redux";
import { changeDataAction } from "../../store/dataReducer";
import { changeCurrentPageAction, changeItemsPageLimitAction } from "../../store/paginationReducer";
import { switchToDefaultSortAction } from "../../store/queryParamsReducer";


const Reset = () => {

   const storeData = useSelector(state => state.dataReducer.storeData)
   const dispatch = useDispatch()

   const handleReset = () => {
      dispatch(changeDataAction(storeData.results))
      dispatch(switchToDefaultSortAction())
      dispatch(changeCurrentPageAction(1))
      dispatch(changeItemsPageLimitAction(10))
   }

   return (
      <div className="query__reset">
         <button onClick={handleReset}>Reset</button>
      </div>
   )
}

export default Reset;