import React, {JSX} from 'react';
import styles from './P.module.css'
import {PProps} from "@/components/P/P.props";
import cn from 'classnames'

const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.s] : size === 's',
            [styles.m] : size === 'm',
            [styles.l] : size === 'l'
        })} {...props}>
            {children}
        </p>
    );
};

export default P;