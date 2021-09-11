import React from 'react';
import styles from './product.module.css'
import Header from "../../components/header/header";

const Product = () => {
    return (
        <div>
            <Header/>
            <div className={styles.schedule}></div>
        </div>
    );
};

export default Product;