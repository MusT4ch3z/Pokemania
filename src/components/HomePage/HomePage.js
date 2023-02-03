import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Reset from "../Reset/Reset";
import CardList from "../CardList/CardList";
import "../../App.css";

const HomePage = () => {
  return (
    <div>
      <div className="row query_params">
        <Sort />
        <Filter />
        <Reset />
      </div>
      <CardList />
    </div>
  );
};

export default HomePage;
