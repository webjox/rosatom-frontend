import React, {createRef, useState} from 'react';
import styles from "./search.module.css";

const Search = () => {

    const [data, setData] = useState([])
    const [file, setFile] = useState(null)
    const [quickSearch, setQuickSearch] = useState(true)

    const ref = createRef();

    const request = async (e) => {
        let formdata = new FormData();
        formdata.append("text", e.target.value);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://admin.rosatom.webjox.ru/api/request/quick-search", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (Array.isArray(result)) {
                    setData(result)
                } else {
                    setData([{title: 'Неудачный поиск, попробуйте перефразировать запрос'}])
                }
            })
            .catch(error => console.log('error', error));
    }


    function changeFile(event) {
        const {files} = event.target
        setFile(files[0])

        let formdata = new FormData();
        formdata.append("text", files[0]);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://admin.rosatom.webjox.ru/multi-parser/parse", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className={styles.search}>
            <div className={styles.container}>
                <div className={styles.title}>Производители</div>
                <div>
                    <div className={styles.inputControl}>
                        <div className={styles.inputSearch}>
                            <input type="text" placeholder='Поиск' onInput={request} onBlur={() => setData([])}/>
                            <button type='button'>Поиск</button>
                        </div>


                        <label className={`btn ${styles.btnFile}`}>
                            <input type="file" className={styles.inputFile} onChange={changeFile}/>
                            Загрузка из файла
                        </label>
                    </div>
                    <label className={styles.labelCheckbox}>
                        <input type="checkbox" className={styles.inputCheckbox} checked={quickSearch}
                               onClick={() => setQuickSearch(!quickSearch)}/>
                        Искать по частичному совпадению
                    </label>
                </div>
                <div className={styles.prompt} style={data.length ? {display: "block"} : {display: "none"}}>
                    <div className={styles.options}>
                        {data.map(r => <div key={r.id} className={styles.product}>{r.title}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;