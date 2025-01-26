import React from 'react'

const PresensiPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ok');
        
    }
    return (
        <div className="flex justify-center items-center bg-base-300 w-full">
            <form className="bg-white p-8 rounded-md shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center mb-6">Presensi Hari ini</h2>
                <div className="flex gap-4 flex-col justify-center mt-4">
                    {/* Hadir */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-between items-center">
                            <span className="label-text text-lg font-medium">Hadir</span>
                            <input
                                type="radio"
                                name="presensi"
                                className="radio checked:bg-blue-500"
                            />
                        </label>
                    </div>
                    {/* Izin */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-between items-center">
                            <span className="label-text text-lg font-medium">Izin</span>
                            <input
                                type="radio"
                                name="presensi"
                                className="radio checked:bg-green-500"
                            />
                        </label>
                    </div>
                    {/* Terlambat */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-between items-center">
                            <span className="label-text text-lg font-medium">Terlambat</span>
                            <input
                                type="radio"
                                name="presensi"
                                className="radio checked:bg-yellow-500"
                            />
                        </label>
                    </div>
                    {/* Tanpa Keterangan */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-between items-center">
                            <span className="label-text text-lg font-medium">Tanpa Keterangan</span>
                            <input
                                type="radio"
                                name="presensi"
                                className="radio checked:bg-red-500"
                            />
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PresensiPage
