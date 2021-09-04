import React from 'react';
import styles from "./search.module.css";

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.container}>
                <div className={styles.title}>Поставщики</div>
                <div>
                    <div className={styles.inputControl}>
                        <div className={styles.inputSearch}>
                            <input type="text" placeholder='Поиск'/>
                            <button type='button'>Поиск</button>
                        </div>


                        <label className={`btn ${styles.btnFile}`}>
                            Загрузка из файла
                            <input type="file" className={styles.inputFile}/>
                        </label>
                    </div>

                    <label className={styles.labelCheckbox}>
                        <input type="checkbox" className={styles.inputCheckbox}/>
                        Искать по частичному совпадению
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Search;