import React, { FunctionComponent } from 'react';
import FlippingCard from '../../../UI/FlippingCard/FlippingCard';
import classes from './Technology.module.css';

interface Props {
    name: string;
    icon: FunctionComponent<any>;
    children?: React.ReactNode;
}

const Technology: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes['technology-container']}>
            <FlippingCard body={props.children}>
                <div className={classes['icon']}>
                    <props.icon />
                </div>
            </FlippingCard>
            <span className={`${classes['technology-name']} font-body`}>{props.name}</span>
        </div>
    );
}

export default Technology;