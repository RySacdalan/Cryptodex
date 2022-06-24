import React from 'react';
import Header from '../components/Header';

const MainHeader = ({handleChange}) => {
    return(
        <div className="max-content">
            <Header handleChange={handleChange}/>
        </div>
    )
}

export default MainHeader