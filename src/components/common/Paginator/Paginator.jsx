import React from 'react';
import style from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    // общее число страниц = всего пользователей / кол-во пользователей на 1стр (5)
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        // ограничение в 10 страниц, чтобы не отображалось 100500
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div className={style.paginator_wrap}>
            {pages.map(page => {
                return <span key={page.id} className={currentPage === page && style.currentPage}
                             onClick={() => {
                                 onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
    );
}

export default Paginator;