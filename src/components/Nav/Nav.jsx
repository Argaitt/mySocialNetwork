import React from "react";
import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    const isActive = (navData) => {
        let ret;
        navData.isActive ? ret = classes.active : ret = classes.item
        return ret;
    }
    return(
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={navData => isActive(navData)}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={navData => isActive(navData)}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={navData => isActive(navData)}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={navData => isActive(navData)}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={navData => isActive(navData)}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default  Nav;