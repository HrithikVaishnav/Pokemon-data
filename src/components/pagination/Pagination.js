import React from 'react';
import './Pagination.css'
const Pagination = ({shownextpage , showprevpage}) => {
    return (
        <div className="container">
            <button onClick={showprevpage}>Previous</button>
            <button onClick={shownextpage}>Next</button>
        </div>
    )
}

export default Pagination;