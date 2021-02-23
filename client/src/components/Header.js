import React from 'react';
import {Link,navigate} from '@reach/router'
import '../App.css';

const Header = () => {

    return(
        <div className="header">
            <h1>Coding Dojo</h1>
            <h1>Dev Site</h1>
            <Link to="/">Add Dev</Link>
        </div>
    )
}

export default Header;