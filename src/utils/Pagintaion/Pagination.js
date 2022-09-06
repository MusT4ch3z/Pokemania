import { useState, useEffect } from "react";

const Pagination = () => {

  const [paginationData, setPaginationData] = useState({});
  const [itemsLimit, setItemsLimit] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);



  let url = 'https://pokeapi.co/api/v2/pokemon/?&offset=0'

  const fetchData = () => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        setPaginationData(data);
      })
  }

  useEffect(() => {
    fetchData()

  }, []);
  console.log(paginationData)

  setTotalItems(paginationData.count);
  setTotalPages(totalItems / itemsLimit);

  return (
    <div className="pagination">
      Pagination:
      <br />
      Total Items: {totalItems}
      <br />
      Total Pages: {totalPages}
    </div>
  )
}

export default Pagination