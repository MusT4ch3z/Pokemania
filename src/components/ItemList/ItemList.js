import { useSelector } from "react-redux";
import Item from "../Item/Item";

const ItemList = () => {
  const itemsToRender = useSelector((state) => state.dataReducer.itemsToRender);

  return (
    <div className="item_list card_list">
      {itemsToRender.map((item) => (
        <Item name={item.name} url={item.url} key={item.name} />
      ))}
    </div>
  );
};

export default ItemList;
