import React, {JSX} from 'react';
import {TagProps} from "@/components/Tag/Tag.props";
import cn from "classnames";
import styles from './Tag.module.css'
import Link from "next/link";

const Tag = ({size = 's', children, href, color = 'ghost', className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.s] : size === 's',
            [styles.m] : size === 'm',
            [styles.ghost] : color === 'ghost',
            [styles.red] : color === 'red',
            [styles.grey] : color === 'grey',
            [styles.green] : color === 'green',
            [styles.primary] : color === 'primary'
        })} {...props}
        >
            {
                href ? <Link href={href}>{children}</Link> : <>{children}</>
            }
        </div>
    );
};

export default Tag;