import React, { useState } from 'react';

const Result = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="card bg-colors-primary text-colors-accent w-96">
                <div className="card-body">
                    <h2 className="card-title">Sukses</h2>
                    <p>Jawaban Berhasil Direkam!</p>
                    <div className="card-actions justify-center pt-3">
                        <button
                            className="btn w-1/2 bg-colors-secondary text-colors-accent"
                            onClick={onClose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Kehadiran = () => {
    const [statusKehadiran, setStatusKehadiran] = useState('');

    const [fileSuratIzin, setFileSuratIzin] = useState(null);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [showResult, setShowResult] = useState(false);

    const handleStatusChange = (e) => {
        setStatusKehadiran(e.target.value);
    };

    const handleFileChange = (e) => {
        setFileSuratIzin(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Status Kehadiran:', statusKehadiran);
        if (statusKehadiran === 'izin' && fileSuratIzin) {
            console.log('File Surat Izin:', fileSuratIzin);
        }
        setIsSubmitted(true);
        setShowResult(true);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">Form Kehadiran</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Status Kehadiran:</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="hadir"
                                    checked={statusKehadiran === 'hadir'}
                                    onChange={handleStatusChange}
                                    className="form-radio h-4 w-4 text-blue-600"
                                    disabled={isSubmitted}
                                />
                                <span className="ml-2">Hadir</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="izin"
                                    checked={statusKehadiran === 'izin'}
                                    onChange={handleStatusChange}
                                    className="form-radio h-4 w-4 text-blue-600"
                                    disabled={isSubmitted} // Nonaktifkan radio button jika sudah disubmit
                                />
                                <span className="ml-2">Izin</span>
                            </label>
                        </div>
                    </div>

                    {/* Form Input File (Muncul hanya jika memilih "Izin") */}
                    {statusKehadiran === 'izin' && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Upload Surat Izin:</label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                disabled={isSubmitted} // Nonaktifkan input file jika sudah disubmit
                            />
                        </div>
                    )}

                    {/* Tombol Submit */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className={`bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                isSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                            }`}
                            disabled={isSubmitted} // Nonaktifkan tombol jika sudah disubmit
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Tampilkan Result jika showResult true */}
                {showResult && <Result onClose={() => setShowResult(false)} />}
            </div>
        </>
    );
};

export default Kehadiran;