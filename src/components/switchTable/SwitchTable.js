import React, {useState} from 'react';

const SwitchTable = () => {

    const [activeTable, setActiveTable] = useState(false)

    return (
        <div>
            <div>
                <button onClick={() => setActiveTable(false)}>Отечественные производители</button>
                <button onClick={() => setActiveTable(true)}>Импортные производители</button>
            </div>
            <div>
                {activeTable ? (
                    <div>Статичная</div>
                ) : (
                    <div>Побочная</div>
                )}
            </div>
        </div>
    );
};

export default SwitchTable;