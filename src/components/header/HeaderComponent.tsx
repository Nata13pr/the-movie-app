import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'tvshow'}>TV Show</Link>
        </div>
    );
};

export default HeaderComponent;