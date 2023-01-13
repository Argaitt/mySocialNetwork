import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return(
        <header className={classes.header}>
            <img alt="no img" src={"https://cdn.logo.com/hotlink-ok/logo-social.png"}/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div className={classes.authInfo}>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}
export default  Header;