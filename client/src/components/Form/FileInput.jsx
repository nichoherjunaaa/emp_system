import React from 'react'

const FileInput = () => {
    return (
        <div className="flex w-full">
            <input type="file" className="file-input file-input-bordered w-full" required />
        </div>
    )
}

export default FileInput