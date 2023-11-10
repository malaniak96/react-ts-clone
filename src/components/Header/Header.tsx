import React, {useState} from 'react';
// @ts-ignore
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={css.Header}>
            <h1>The MovieDB</h1>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <div className={`dark-mode-switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
                <input type="checkbox" checked={isDarkMode} onChange={toggleMode}/>
            </div>

        </div>
    );
};

export {
    Header
};