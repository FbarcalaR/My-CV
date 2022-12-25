import React, { FunctionComponent } from 'react';
import classes from './FlippingCard.module.css';

interface Props {
    body: React.ReactNode;
    children?: React.ReactNode;
}

const FlippingCard: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes['flipping-card']} >
            <div className={classes['flipping-card-children']}>{props.children}</div>
            <p className={`${classes['flipping-card-text']} font-body`} >{props.body}</p>
        </div>
    );
}

export default FlippingCard;