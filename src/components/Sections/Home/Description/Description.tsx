import React from 'react';
import classes from './Description.module.css';

const Description = () => {
        return (
            <div className={classes.container}>
                <span className={classes.header}>FULLSTACK DEVELOPER</span>
                <span className={classes.body}>Building web apps, from front to back</span>
            </div>
        );
}

export default Description;