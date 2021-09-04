import React from 'react';
import styles from './modalConcat.module.css'

const ModalContact = ({active, setActive, data}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Отправить КП</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className={styles.icon}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.5858 12L7.29291 15.2929L8.70712 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70712L15.2929 7.29291L12 10.5858L8.70712 7.29291L7.29291 8.70712L10.5858 12Z"
                              fill="white"/>
                    </svg>

                </div>
                <div className={styles.description}>Выберите поставщиков для отправки коммерческих предложений</div>
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
                        <label><input type="checkbox"/><span className={styles.name}>Поставщик</span></label>
                    </div>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Поставщик</span></label>
                    </div>
                    <div className={styles.provider}>
                        <label><input type="checkbox"/><span className={styles.name}>Поставщик</span></label>
                    </div>
                </div>
                <div className={styles.submitInfo}>
                    <span>Выбрано 5 поставщиков</span>
                    <button className={styles.btn}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default ModalContact;