import React from 'react';
import {currentPageAC} from "../../bll/actions/actions";
import {useDispatch} from "react-redux";
import './Pagination.scss';

type PaginationType = {
    totalPosts: number;
    perPage: number;
    currentPage: number;
};

const Pagination = ({totalPosts, perPage, currentPage}: PaginationType) => {
    const dispatch = useDispatch();
    const pages = [];

    console.log('totalPosts', totalPosts)
    console.log('perPage', perPage)

    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pages.push(i);
    }

    return (
        <div className="pages">
            {pages.map((page, index) => {
                    const onClickPageHandler = () => dispatch(currentPageAC(page));

                    return <span key={index}
                                 className={currentPage === page ? "currentPage" : "page"}
                                 onClick={onClickPageHandler}
                    >
                        {page}
                    </span>
                }
            )}
        </div>
    );
};

export default Pagination;