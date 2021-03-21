import styles from './FormsControls.module.css'
import React from "react";

const FormsControl = ({input, meta, ...props})=> {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {React.createElement(props.el, {...input, ...props})}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => <FormsControl el="textarea" {...props}/>
export const Input = (props) => <FormsControl el="input" {...props}/>