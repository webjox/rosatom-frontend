import React from 'react';
import './myCheckbox.css'

const MyCheckbox = ({text}) => {
    return (
        <div className="checkbox">
            <label className="custom-checkbox">
                <input type="checkbox" name="color-1" value="indigo"/>
                    <span>{text}</span>
            </label>
        </div>
    );
};

export default MyCheckbox;