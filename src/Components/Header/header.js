import React from 'react';
import classes from "./header.module.css";
import Logo1 from "../../Assest/logo.svg";
const Header = () => {
    return ( 
        <header className={classes.header}>
            <div>
            <img src={Logo1}/>
            </div>
            <nav>
                <ul>
                    <li>Destination</li>
                    <li>Hotels</li>
                    <li>Flight</li>
                    <li>Booking</li>
                    <li>Login</li>
                    <li>Sign up</li>
                </ul>
            </nav>
            <div className={classes.hamburger}>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </div>    
        </header >
     );
}
 
export default Header;