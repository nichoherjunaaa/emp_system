import React from 'react'

const TextArea = ({label, value}) => {
    return (
            <div className="flex flex-col gap-2 mt-5" >
                {label && <label className="text-sm font-semibold text-white">{label}</label>}
                <textarea className="textarea mt-1 bgwhite w-full !text-black" data-theme="light" disabled value={value}></textarea>
            </div>
    )
}

export default TextArea
