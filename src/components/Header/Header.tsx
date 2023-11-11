import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header:FC = () => {

    const [isLightMode, setIsLightMode] = useState(false);

    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode);
        document.body.classList.toggle('light-mode');
    };

    return (
     <div>
         <div className={css.Header}>
             <h1 className={css.movieDB}>The MovieDB</h1>
             <NavLink to={'movie'} >Movies</NavLink>
             <NavLink to={'genre'} >Genres</NavLink>
             <NavLink to={'search'}>Search</NavLink>
             <button className={css.mode} onClick={toggleMode}>THEME MODE</button>
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