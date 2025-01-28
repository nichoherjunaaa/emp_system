import React, { useState } from 'react'
import API from './../api';
import { toast } from 'react-toastify';
const PresensiPage = () => {
    const [choice, setChoice] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = ['hadir', 'izin', 'tanpa_keterangan', 'terlambat']
        if (!options.includes(choice)) {
            toast.error('Pilihan salah satu opsi');
            return;
        }
        try {
            const transformedChoice = choice.replace('_', ' ');

            const response = await API.post('/attendance', {
                status: transformedChoice,
            });
            // console.log(response.data);
            toast.success('Presensi berhasil!')
        } catch (error) {
            const errMsg = error?.response?.data?.message;
            // console.log(errMsg);
            toast.error(errMsg || 'Terjadi kesalahan');
        }
    }

    return (
        <div className="flex justify-around items-center bg-base-300 w-full">
            {/* Form Presensi */}
            <form className="bg-white p-8 rounded-md shadow-md basis-full max-w-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center mb-6">Presensi Hari ini</h2>
                <div className="flex gap-4 flex-col justify-center mt-4">
                    {/* Hadir */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-between items-center">
                            <span className="label-text text-lg font-medium">Hadir</span>
                            <input
                                type="radio"
                                name="presensi"
                                value="hadir"
                                checked={choice === 'hadir'}
                                onChange={(e) => setChoice(e.target.value)}
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
                                value="izin"
                                checked={choice === 'izin'}
                                onChange={(e) => setChoice(e.target.value)}
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
                                value="terlambat"
                                checked={choice === 'terlambat'}
                                onChange={(e) => setChoice(e.target.value)}
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
                                value="tanpa_keterangan"
                                checked={choice === 'tanpa_keterangan'}
                                onChange={(e) => setChoice(e.target.value)}
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

            {/* Div Informasi */}
            <div className="flex flex-col rounded-md shadow-md basis-full max-w-md bg-red-700">
                <div className="flex items-center justify-center p-4">
                    <span className="text-white font-bold">Halo</span>
                </div>
                <div className="bg-accent overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default PresensiPage
