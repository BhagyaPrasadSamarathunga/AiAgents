import React from 'react';
import Styles from './CheckBox.module.css';

type CheckBoxProps = {
    title: string;
    isChecked: boolean;
    onClick: () => void;
}
const CheckBox:React.FC<CheckBoxProps> = ({ title, isChecked, onClick }) => {
    return(
        <div className={Styles.container} data-testid={'checkBox'}>
            <label>{title}</label>
            <input
                data-testid={'checkBox-input'}
                className={Styles.checkBox}
                type="checkbox"
                checked={isChecked}
                onChange={onClick}
            />
        </div>
    )
}

export default CheckBox;