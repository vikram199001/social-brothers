import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

  
const PaginatedItems  = ({ itemsPerPage, items }) => {
   
    const [itemOffset, setItemOffset] = useState(0);
  
    
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        {/* <Items currentItems={currentItems} /> */}
        <ReactPaginate
          breakLabel="..."
          previousLabel="< previous"
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  export default PaginatedItems;