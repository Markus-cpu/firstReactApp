import React from "react";
import Pagination from 'react-js-pagination';
import c from './Paginators.module.css'

const Paginator =({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10})=> {
    return  (
        <div>
            <Pagination
                innerClass={c.pagination}
                activeClass={c.active}
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={portionSize}
                onChange={onPageChanged}
                hideDisabled={false}
            />
        </div>
    )
}
export default Paginator