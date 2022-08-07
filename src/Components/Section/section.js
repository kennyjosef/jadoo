import React from 'react';
import classes from './section.module.css';
import Logo4 from "../../Assest/Group 48.svg";
import Logo5 from "../../Assest/Group 51.svg";
import Logo6 from "../../Assest/Group 50.svg";
import Logo7 from "../../Assest/Group 49.svg";
const Section = () => {
    return ( 
        <section>
            <div className={classes.item1}>
                <p>CATEGORY</p>
                <h3>We Offer Best Services</h3>

            </div>
            <div className={classes.item2}>
                <div>
                    <img src={Logo4} alt="pic"/>
                    <h5>Calculated Weather </h5>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className={classes.second}>
                    <img src={Logo5} alt="pic"/>
                    <h5>Best Flights</h5>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p> 
                </div>
                <div>
                    <img src={Logo6} alt="pic"/>
                    <h5>Local Events</h5>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p> 
                </div>
                <div>
                    <img src={Logo7} alt="pic"/>
                    <h5>Customization</h5>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p> 
                </div>

            </div>
        </section>
     );
}
 
export default Section;