import Sort from "../Sort/Sort"
import Filter from "../Filter/Filter"
import Reset from "../Reset/Reset"
import CardList from "../CardList/CardList"


const HomePage = () => {

   return (
      <div>
         <div className='row'>
            <Sort />
            <Filter />
            <Reset />
         </div>
         <CardList />
      </div>
   )
}

export default HomePage