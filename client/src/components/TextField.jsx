import React from 'react';

const TextFieldReadOnly = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-2 mt-5">
            {label && <label className="text-sm font-semibold text-white">{label}</label>}
            <input 
                type="text" 
                value={value} 
                readOnly 
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-black"
            />
        </div>
    );
};

export default TextFieldReadOnly;
