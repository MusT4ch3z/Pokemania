import { useState, useEffect } from "react";
import './Pagination.css'

const Pagination = ({ changeCurrentPage, currentPage, nextPage, prevPage, totalItems, itemsLimit }) => {

  const [paginationData, setPaginationData] = useState({ isLoaded: false });
  const [totalPages, setTotalPages] = useState(0);
  let pages = [];


  // let url = 'https://pokeapi.co/api/v2/pokemon/?&offset=0'

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsLimit));

    // console.log('CurrentPage,next,prev,totalItems,itemsLimit: ', currentPage, nextPage, prevPage, totalItems, itemsLimit);
    return () => {
    }
  }, [paginationData.count]);


  if (4 < currentPage && currentPage <= totalPages - 4) {
    let j = currentPage - 4;
    for (j; j <= currentPage + 4; j++) {
      pages.push(j)
    }
  } else {
    if (1 <= currentPage && currentPage <= 4) {
      let j = currentPage - 4;
      for (j; j <= 9; j++) {
        if (j > 0) pages.push(j)
      }
    }

    if (totalPages - 4 < currentPage && currentPage <= totalPages) {
      let j = currentPage + 4;
      for (j; j >= totalPages - 8; j--) {
        if (j <= totalPages) pages.unshift(j)
      }
    }
  }

  // console.log(totalPages, pages);

  const toStartPage = () => {
    changeCurrentPage(1)
  }

  const toLastPage = () => [
    changeCurrentPage(totalPages)
  ]

  const toPrevPage = () => {
    if (currentPage > 1) changeCurrentPage(currentPage - 1)
  }

  const toNextPage = () => {
    if (currentPage < totalPages) changeCurrentPage(currentPage + 1)
  }

  const changePage = (e) => {
    let page = parseInt(e.target.innerText)
    changeCurrentPage(page)
  }

  return (
    <div className="pagination">
      {/* Pagination:Total Items: {totalItems}
      Total Pages: {totalPages} */}



      <button onClick={toStartPage}>{'<<'}</button>
      <button onClick={toPrevPage}>{'<'}</button>
      {pages.map((page) => <button key={page} className={page === currentPage? 'active':undefined}  onClick={changePage} >{page}</button>)}
      <button onClick={toNextPage}>{'>'}</button>
      <button onClick={toLastPage}>{'>>'}</button>

    </div>
  )
}

export default Pagination