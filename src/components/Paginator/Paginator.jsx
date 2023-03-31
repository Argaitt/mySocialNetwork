import React from "react";
import classes from "../Paginator/Paginator.module.css";

const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            {pages.map(page => {
                return <span key={page} onClick={() => onPageChanged(page)}
                             className={currentPage === page ? classes.selectedPage : undefined}>{page}</span>
            })}
        </div>
}

export default Paginator;