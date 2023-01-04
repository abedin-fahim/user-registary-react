import React from "react";

import styles from './Button.module.css';
const Button = (props) => {
    return (
        // Again, we can accept styles as props by doing the following
        <button
            type={props.type || 'button'} 
            className={`${styles.button} ${props.className}`} 
            onClick={props.onClick}
            >
            {props.children}
        </button>
        // <button type={props.type} className={styles.button}>
        //     {props.children}
        // </button>
    );
}

export default Button