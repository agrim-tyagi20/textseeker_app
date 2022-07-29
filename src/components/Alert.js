import React from 'react'

function Alert(props) {

    const firstChr = (word) => {
        const first = word.toLowerCase();
        return first.charAt(0).toUpperCase() + first.slice(1);

    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{firstChr(props.alert.type)}</strong>: {props.alert.msg}

        </div>}
        </div>
    )
}

export default Alert
