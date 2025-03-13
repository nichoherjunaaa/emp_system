import React from 'react';

const FormInput = ({label, name, type, defaultValue }) => {
    return (
        
        <label className="form-control w-full">
            <input 
                type={type} 
                name={name} 
                defaultValue={defaultValue} 
                placeholder={label}
                className="text-black input input-bordered w-full text-sm sm:text-base md:text-lg border-1 border-base-300 rounded-full p-6 bg-[var(--secondary)] "
            />
            
        </label>
    );
};

export default FormInput;
