import React from 'react'
import Pagination from 'react-js-pagination'
import './Paginators.css'

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}

const Paginator: React.FC<PropsType> =({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10})=> {
    return  (
        <div>
            <Pagination
                innerClass='pagination'
                activeClass='active'
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