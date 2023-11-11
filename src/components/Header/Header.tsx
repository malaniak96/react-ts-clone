import React from 'react';

import css from './Header.module.css';

import {NavLink} from "react-router-dom";



const Header: React.FC = () => {

    let isDarkMode = false;

    function toggleMode() {
        const body = document.body;
        isDarkMode = !isDarkMode;

        console.log(isDarkMode)
        if (isDarkMode) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }

    return (
     <div>
         <div className={css.Header}>
             <h1>The MovieDB</h1>
             <NavLink to={'movie'} >Movies</NavLink>
             <NavLink to={'genre'} >Genres</NavLink>
             <NavLink to={'search'}>Search</NavLink>
             <button onClick={toggleMode}>CHANGE THEME</button>
             <div className={'user'}>
                 <img className={css.userPhoto} alt={'user'} src={"https://toppng.com/uploads/preview/circled-user-female-skin-type-4-icon-pro-icon-115534084504dcnr2bmdl.png"}/>
                 <h5>olga96</h5>
             </div>
         </div>
     </div>
    );
};

export {
    Header
};