import React, {useState} from 'react';
import styles from './Home.module.css'
import Search from "../../components/search/Search";
import Header from "../../components/header/header";
import ModalContact from "../../components/modalContact/ModalContact";

const Home = () => {
    return (
        <div>
            <ModalContact/>

            <Header/>
            <div className={styles.container}>
                <Search/>

                <div className={styles.btnAgree}>
                    <button className={'btn'}>Выгрузить в файл</button>
                    <button className={'btn'}>Отправить запрос поставщику</button>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Поставщик 2</th>
                            <th>Поставщик 3</th>
                            <th>Поставщик 4</th>
                            <th>Поставщик 5</th>
                        </tr>
                        <tr className={styles.tableResult}>
                            <td>Совпадения, %</td>
                            <td>90%</td>
                            <td>65%</td>
                            <td>70%</td>
                            <td>48%</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a href="#">Товар 1</a></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                        </tr>
                        <tr>
                            <td><a href="#">Товар 1</a></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                        </tr>
                        <tr>
                            <td><a href="#">Товар 2</a></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                        </tr>
                        <tr>
                            <td><a href="#">Товар 3</a></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                        </tr>
                        <tr>
                            <td><a href="#">Товар 4</a></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                        </tr>
                        <tr>
                            <td><a href="#">Товар 5</a></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                            <td><label><input type="checkbox"/></label></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;