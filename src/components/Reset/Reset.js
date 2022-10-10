import { useDispatch, useSelector } from "react-redux";
import { changeDataAction } from "../../store/dataReducer";
import { switchToDefaultSortAction } from "../../store/queryParamsReducer";


const Reset = () => {

   const storeData = useSelector(state => state.dataReducer.storeData)
   const dispatch = useDispatch()

   const handleReset = () => {
      dispatch(changeDataAction(storeData.results))
      dispatch(switchToDefaultSortAction())
   }

   return (
      <div>
         <button onClick={handleReset}>Reset</button>
      </div>
   )
}

export default Reset;