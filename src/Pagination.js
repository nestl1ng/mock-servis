import React from 'react'
import ReactPaginate from 'react-paginate';
 const Pagination = ({onPageChange,currantPage, pageCount,items}) => {
  return (
    <ReactPaginate
        className='Pagination'
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event)=>onPageChange(event.selected+1)}
        pageRangeDisplayed={items}
        pageCount={Math.ceil(pageCount)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currantPage-1}
      />
  )
}
export default Pagination;
