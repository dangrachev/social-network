import React, {useState} from 'react';
import style from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    // общее число страниц = всего пользователей / кол-во пользователей на 1стр (5)
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.floor(currentPage / portionSize) + 1);

    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;

    return (
        <div className={style.paginator_wrap}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}

            {pages
                .filter(page => page >= leftPortionBorder && page <= rightPortionBorder)
                .map(page => <span key={page.id} className={currentPage === page && style.currentPage}
                             onClick={() => {
                                 onPageChanged(page)
                             }}>{page}</span>
            )}

            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    );
}

export default Paginator;