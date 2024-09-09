import React from 'react';
import Styles from './Button.module.css';

type ButtonProps = {
    title: string;
    style?: string;
    isDisable: boolean;
    onClick: ()=>void;
    testID?: string;
};

const Button:React.FC<ButtonProps> = ({ title, style, isDisable, onClick, testID }) =>{
    
    return(
        <button 
            className={`${Styles.button} ${style ? style : ''}`}
            onClick={onClick} 
            disabled={isDisable}
            data-testid={testID ? testID : `${title}-button`}
        >
            {title}
        </button>
    )
}
export default Button;