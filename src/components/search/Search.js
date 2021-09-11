import React, {useEffect, useRef, useState} from 'react';
import styles from "./search.module.css";

const Search = () => {

    const [data, setData] = useState([])
    const [searchActive, setSearchActive] = useState(false)
    const [quickSearch, setQuickSearch] = useState(true)
    const [text, setText] = useState()

    const value = useRef()

    const blurSearch = () => {
        setText(null)
        setSearchActive(false)
        setData([])
    }

    const requestQuickSearch = async (e) => {
        setText(value.current.value)

        let formdata = new FormData();
        formdata.append("text", e.target.value);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if (value.current.value.length === 5) {
            await fetch("http://admin.rosatom.webjox.ru/api/request/quick-search", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (Array.isArray(result)) {
                        setData(result)
                        setSearchActive(true)
                    } else {
                        setData([])
                        setSearchActive(false)
                    }
                })
                .catch(error => console.log('error', error));
        } else {
            blurSearch()
        }
    }


    return (
        <div className={styles.search}>
            <div className={styles.container}>
                <div className={styles.title}>Производители</div>
                <div>
                    <div className={styles.inputControl}>
                        <div className={styles.inputSearch}>
                            <input type="text" placeholder='Поиск' onChange={requestQuickSearch} ref={value}
                                   value={text}/>
                            <button type='button'>Поиск</button>
                        </div>

                        <label className={`btn ${styles.btnFile}`}>
                            <input type="file" className={styles.inputFile}/>
                            Загрузка из файла
                        </label>
                    </div>
                    <label className={styles.labelCheckbox}>
                        <input type="checkbox" className={styles.inputCheckbox} checked={quickSearch}
                               onClick={() => setQuickSearch(!quickSearch)}/>
                        Искать по частичному совпадению
                    </label>
                </div>
                <div className={styles.prompt} style={searchActive ? {display: "block"} : {display: "none"}}>
                    <div className={styles.options}>
                        {data.map(r => <div key={r.id} className={styles.product} onClick={() => {
                            setText(r.title)
                            setSearchActive(false)
                        }}>{r.title}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;