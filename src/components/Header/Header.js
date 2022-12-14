import React from 'react';
import './header.css'
const Header = () => {
    return (
        <>
        <div className="counter-wrap-nav">
            <div className="container">
                <ul className='counter-list-nav'>
                    <li className='counter-item-nav'>
                        <a className='counter-logo' href="../../../public/index.html"> Where in the world?</a>
                    </li>
                    <li className='counter-item-nav'>
                        <button className='counter-text-dark'>Dark Mode</button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};


export default Header;