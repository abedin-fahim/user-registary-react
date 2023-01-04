import React from "react";

import styles from './Card.module.css'
const Card = (props) => {
    return (
        // To add styles coming (if) from the AddUser.js Component, we could do the following
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
        // <div className={styles.card}>
        //     {props.children}
        // </div>
    );
};

export default Card;