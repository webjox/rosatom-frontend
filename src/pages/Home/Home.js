import React, {useState} from 'react';
import styles from './Home.module.css'
import Search from "../../components/search/Search";
import Header from "../../components/header/header";
import ModalContact from "../../components/modalContact/ModalContact";

const Home = () => {

    const [active, setActive] = useState(false)
    const [activeTable, setActiveTable] = useState(true)


    const linkIMG = () => {
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.88909 15.4749C2.52225 14.108 2.52225 11.892 3.88909 10.5251L5.65685 8.75736L4.94975 8.05025L3.18198 9.81802C1.42462 11.5754 1.42462 14.4246 3.18198 16.182C4.93934 17.9393 7.78858 17.9393 9.54594 16.182L11.3137 14.4142L10.6066 13.7071L8.83883 15.4749C7.472 16.8417 5.25592 16.8417 3.88909 15.4749ZM8.48528 5.92893L10.253 4.16117C11.6199 2.79433 13.836 2.79433 15.2028 4.16117C16.5696 5.528 16.5696 7.74408 15.2028 9.11091L13.435 10.8787L14.1421 11.5858L15.9099 9.81802C17.6673 8.06066 17.6673 5.21142 15.9099 3.45406C14.1525 1.6967 11.3033 1.6967 9.54594 3.45406L7.77817 5.22183L8.48528 5.92893ZM7.07107 13L12.7279 7.34315L12.0208 6.63604L6.36396 12.2929L7.07107 13Z"
                  fill="white" stroke="white"/>
        </svg>

    }
    return (
        <div>
            <ModalContact active={active} setActive={setActive}/>

            <Header/>
            <div className={styles.container}>
                <Search/>

                <div>
                    <div>
                        <button className={styles.btnTable} onClick={() => setActiveTable(true)}>Отечественные производители</button>
                        <button claonClick={() => setActiveTable(false)}>Импортные производители</button>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.agree}>
                            <div className={styles.btnAgree}>
                                <button className={'btn'}>Выгрузить в файл</button>
                                {activeTable ? (
                                    <>
                                        <button className={'btn'} onClick={() => setActive(true)}>Отправить запрос
                                            производителям
                                        </button>
                                        <button className={'btn'}>Сравнительный анализ производителей</button>
                                    </>
                                ) : ' '}

                            </div>
                            <div>
                                <span className={styles.selectName}>Отображать производителей</span>
                                <select className={styles.select}>
                                    <option>3</option>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                </select>
                            </div>
                        </div>
                        {activeTable ? (
                            <table className={styles.table}>
                                <thead>
                                <tr>
                                    <th>Наименование</th>
                                    <th>ОКВЭД</th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                </tr>
                                <tr className={styles.tableResult}>
                                    <td>Совпадения, %</td>
                                    <td></td>
                                    <td>90%</td>
                                    <td>65%</td>
                                    <td>70%</td>
                                    <td>48%</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="#">Товар 1</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 2</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 3</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 4</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 5</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                </tr>
                                </tbody>
                            </table>
                        ) : (
                            <table className={styles.table}>
                                <thead>
                                <tr>
                                    <th>Наименование</th>
                                    <th>ТН ВЭД</th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.tableItems}>
                                            <span>Производитель</span>
                                            {linkIMG()}
                                        </div>
                                    </th>
                                </tr>
                                <tr className={styles.tableResult}>
                                    <td>Совпадения, %</td>
                                    <td></td>
                                    <td>90%</td>
                                    <td>65%</td>
                                    <td>70%</td>
                                    <td>48%</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="#">Товар 1</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 2</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 3</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 4</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Товар 5</a></td>
                                    <td>07.10.2</td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox" checked/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                    <td><label><input type="checkbox"/></label></td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;