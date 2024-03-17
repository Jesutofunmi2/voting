import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./SlideBar.module.scss";

const SlideBar = ({
    isOpen,
    closeSidebar
}) => {
    const stylesr = isOpen ? 'sidebar sidebar--open' : 'sidebar sidebar--closed';

    return (
        <Fragment>
            {isOpen ? <div className={styles.sidebar__backdrop} onClick={closeSidebar}></div> : <Fragment></Fragment>}
            <nav className={`${stylesr}`}>
                <ul className={styles.sidebar__list}>
                    <div className={styles.sidebar__logo}>
                        Navbar App
                    </div>
                    <li className={styles.sidebar__list__item} onClick={closeSidebar}>
                        <NavLink className={styles.sidebar__link} exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.sidebar__list__item} onClick={closeSidebar}>
                        <NavLink className={styles.sidebar__link} to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className={styles.sidebar__list__item} onClick={closeSidebar}>
                        <NavLink className={styles.sidebar__link} to='/services'>
                            Services
                        </NavLink>
                    </li>
                    <li className={styles.sidebar__list__item} onClick={closeSidebar}>
                        <NavLink className={styles.sidebar__link} to='/gallery'>
                            Gallery
                        </NavLink>
                    </li>
                    <li className={styles.sidebar__list__item} onClick={closeSidebar}>
                        <NavLink className={styles.sidebar__link} to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default SlideBar;