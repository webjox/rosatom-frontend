import React from 'react';
import styles from './modalAnaliz.module.css'

const ModalAnaliz = ({active, setActive}) => {
    return (
        <div className={styles.modal} style={active ? {display: "flex"} : {display: "none"}}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Отправить запрос коммерческого предложения</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className={styles.icon} onClick={() => setActive(false)}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.5858 12L7.29291 15.2929L8.70712 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70712L15.2929 7.29291L12 10.5858L8.70712 7.29291L7.29291 8.70712L10.5858 12Z"
                              fill="white"/>
                    </svg>

                </div>
                <div className={styles.description}>Выберите производителей для сравнения</div>
                <div className={styles.action}>
                    <label className={styles.actionChange}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.5" y="2.5" width="15" height="15" rx="1.5" fill="white" stroke="#D8DFEF"/>
                            <rect x="2.5" y="6.5" width="15" height="15" rx="1.5" fill="white" stroke="#D8DFEF"/>
                            <rect x="5" y="9" width="10" height="10" rx="1" fill="#1B75C9"/>
                        </svg>
                        Выделить всех
                    </label>
                    <label className={styles.actionChange}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.5" y="2.5" width="15" height="15" rx="1.5" fill="white" stroke="#D8DFEF"/>
                            <rect x="2.5" y="6.5" width="15" height="15" rx="1.5" fill="white" stroke="#D8DFEF"/>
                        </svg>
                        Снять выделение
                    </label>
                </div>
                <div className={styles.output}>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Производитель</span></label>
                    </div>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Производитель</span></label>
                    </div>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Производитель</span></label>
                    </div>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Производитель</span></label>
                    </div>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Производитель</span></label>
                    </div>
                </div>
                <div className={styles.submitInfo}>
                    <span>Выбрано 5 Производительов</span>
                    <button className={styles.btn}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAnaliz;