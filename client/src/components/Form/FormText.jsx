import React from 'react'

const FormText = ({label, name, type, defaultValue}) => {
    return (
        <label className="form-control flex flex-col">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <textarea className="textarea mt-2 w-full border border-black" type={type} defaultValue={defaultValue} name={name}/>
        </label >
        
    )
}

export default FormText