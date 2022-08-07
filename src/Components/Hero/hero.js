import React from 'react';
import Logo2 from '../../Assest/logo2.png';
import classes from './hero.module.css';
const Hero = () => {
    return ( 
        <div className={classes.hero}>
            <div className={classes.hero_text}>
                <h3>Best Destinations around the world</h3>
                <h1>Travel, enjoy
                and live a new
                and full life</h1>
            <p className={classes.hero_para}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className={classes.herobtn}>
                    <button>
                        Find out more
                    </button>
                    <div>
                        <p>Play Demo</p>
                    </div>
                </div>
            </div>
            <div className={classes.hero_image}>
                <img src={Logo2} alt="pic"/>
            </div>
            

        </div>
     );
}
 
export default Hero;
