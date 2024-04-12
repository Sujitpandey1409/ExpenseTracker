import React from 'react';
import './Pagination.css'
const Pagination = () => {
    return ( 
        <div className='paginationContainer'>
            <button className="navigationBtn">{'<—'}</button>
            <div className="navigationPageNo">1</div>
            <button className="navigationBtn">{'—>'}</button>
        </div>
     );
}
 
export default Pagination;