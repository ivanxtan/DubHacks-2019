import React from "react";

import styles from "./FullHeight.module.css";

function FullHeight(props) {
    return (
            <div className={styles.container}>
                {props.children}
            </div>
        );
}

export default FullHeight;