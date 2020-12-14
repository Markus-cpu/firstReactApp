import React, {useState} from "react";
import './Paginators.css'

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}

const Paginator: React.FC<PropsType> =({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10})=> {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return  (
        <div className='pagination'>
            {portionNumber > 1 &&
               <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>prev</button>
            }
            {pages.filter(p => (p >= leftPortionNumber && p <= rightPortionNumber))
                .map((p)=> {
                    return <span className={ ({
                        ['selectedPage']: currentPage === p
                    }, 'pageNumber')} key={p} onClick={(e)=> {
                    onPageChanged(p)
                    }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>next</button>
            }
        </div>
    )
}
export default Paginator