import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Pagination.css'
import { changeCurrentPageAction, changeItemsPageLimitAction } from "../../store/paginationReducer";

const Pagination = () => {

  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.paginationReducer.currentPage)
  const itemsPageLimit = useSelector(state => state.paginationReducer.itemsPageLimit)
  const totalItems = useSelector(state => state.dataReducer.data.length)
  const [totalPages, setTotalPages] = useState(0);
  let pages = [];

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPageLimit));
  }, [totalItems]);

  if (4 < currentPage && currentPage <= totalPages - 4) {
    pages = [];
    let j = currentPage - 4;
    for (j; j <= currentPage + 4; j++) {
      pages.push(j)
    }
  } else {
    if (1 <= currentPage && currentPage <= 4 && totalPages > 9) {
      pages = [];
      let j = currentPage - 4;
      for (j; j <= 9; j++) {
        if (j > 0) pages.push(j)
      }
    } else {
      {
        pages = [];
        let i = 1;
        for (i; i <= totalPages; i++) {
          pages.push(i)
        }

      }
    }

    if (totalPages - 4 < currentPage && currentPage <= totalPages && totalPages > 9) {
      pages = [];
      let j = currentPage + 4;
      for (j; j >= totalPages - 8; j--) {
        if (j <= totalPages) pages.unshift(j)
      }
    }
  }
  // console.log(totalPages, pages);
  const toStartPage = () => {
    dispatch(changeCurrentPageAction(1))
  }

  const toLastPage = () => [
    dispatch(changeCurrentPageAction(totalPages))
  ]

  const toPrevPage = () => {
    if (currentPage > 1) dispatch(changeCurrentPageAction(currentPage - 1))
  }

  const toNextPage = () => {
    if (currentPage < totalPages) dispatch(changeCurrentPageAction(currentPage + 1))
  }

  const changePage = (e) => {
    let page = parseInt(e.target.innerText)
    dispatch(changeCurrentPageAction(page))
  }

  return (
    <div className="pagination">
      <div className="pagination__page_limit">
        <button className="pagination__page_limit__button" onClick={() => { dispatch(changeItemsPageLimitAction(10)) }}>10</button>
        <button className="pagination__page_limit__button" onClick={() => { dispatch(changeItemsPageLimitAction(20)) }}>20</button>
        <button className="pagination__page_limit__button" onClick={() => { dispatch(changeItemsPageLimitAction(50)) }}>50</button>
      </div>
      <button onClick={toStartPage}>{'<<'}</button>
      <button onClick={toPrevPage}>{'<'}</button>
      {pages.map((page) => <button key={page} className={page === currentPage ? 'active' : undefined} onClick={changePage} >{page}</button>)}
      <button onClick={toNextPage}>{'>'}</button>
      <button onClick={toLastPage}>{'>>'}</button>
    </div>
  )
}

export default Pagination