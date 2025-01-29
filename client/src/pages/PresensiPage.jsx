import React, { useState, useEffect } from 'react'
import API from './../api';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const PresensiPage = () => {
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState(null);
    const [isRecord, setRecord] = useState(false)
    const user = useSelector((state) => state.userState.user)
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
            setChoice('');
            getDataPresensi();
        } catch (error) {
            const errMsg = error?.response?.data?.message;
            // console.log(errMsg);
            toast.error(errMsg || 'Terjadi kesalahan');
        }
    }

    const getDataPresensi = async () => {
        try {
            const { data } = await API.get('/attendance')
            setResult(data.data);
            const today = new Date().toISOString().split('T')[0];

            const hasRecordToday = data.data.some((item) => {
                const itemDate = new Date(item.tanggal).toISOString().split('T')[0];
                return itemDate === today;
            });
            // console.log(hasRecordToday);
            setRecord(hasRecordToday);
        } catch (error) {
            const errMsg = error?.response?.data?.message;
            // console.log(errMsg);
            toast.error(errMsg || 'Terjadi kesalahan');
        }
    }

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const tanggalFormat = date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const waktuFormat = date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        });
        return { tanggalFormat, waktuFormat };
    };

    useEffect(() => {
        getDataPresensi();
    }, [])



    return (
        <div className="grid grid-cols-2 gap-8 bg-base-300 w-full p-8">
        {/* div1 */}
        <form className="bg-white p-8 rounded-md shadow-md flex flex-col h-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">Presensi Hari ini</h2>
            <div className="flex gap-4 flex-col justify-center flex-grow">
                {['hadir', 'izin', 'terlambat', 'tanpa_keterangan'].map((status, index) => (
                    <div className="form-control" key={index}>
                        <label className="label cursor-pointer flex justify-between items-center">
                            <span className="label-text text-lg font-medium capitalize">{status.replace('_', ' ')}</span>
                            <input
                                type="radio"
                                name="presensi"
                                value={status}
                                checked={choice === status}
                                onChange={(e) => setChoice(e.target.value)}
                                className={`radio checked:bg-${status === 'hadir' ? 'blue' : status === 'izin' ? 'green' : status === 'terlambat' ? 'yellow' : 'red'}-500`}
                                disabled={isRecord}
                            />
                        </label>
                    </div>
                ))}
            </div>
            {!isRecord ? (
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                >
                    Submit
                </button>
            ) : (
                <div className="flex justify-center mt-7 btn btn-error w-full py-6">
                    <span className="text-base">Anda sudah melakukan presensi hari ini.</span>
                </div>
            )}
        </form>
        {/* div2 */}
        <div className="bg-white rounded-md shadow-md flex flex-col h-full p-4">
            <div className="flex items-center justify-center p-4 border-b">
                <span className="text-pretty font-bold text-2xl">Riwayat Presensi</span>
            </div>
            <div className="flex-grow">
                <table className="table w-full">
                    <thead className="ml-4">
                        <tr>
                            <th>Waktu</th>
                            <th>Tanggal</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="ml-4">
                        {result?.map((item, index) => {
                            const { waktuFormat, tanggalFormat } = formatDateTime(item.tanggal);
                            return (
                                <tr key={index} className='bg-base-300'>
                                    <td>{waktuFormat}</td>
                                    <td>{tanggalFormat}</td>
                                    <td className="capitalize">{item.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    )
}

export default PresensiPage
