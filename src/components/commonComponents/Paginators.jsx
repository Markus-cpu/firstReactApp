import React from "react";
import c from './Paginators.module.css'

const Paginator =({currentPage, onPageChanged, totalUsersCount, pageSize})=> {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return  (
        <div>
            {pages.map(p => {
                //анонимная функция вызовется при клике на span
                //в обработчике события мы вызываем наш метод
                return <span onClick={() => { onPageChanged(p) }}
                         className={ currentPage === p && c.selectedPage }
                         key={p.id}>{p}</span>
            })}
        </div>
    )
}
export default Paginator