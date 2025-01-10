import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import API from '../api/api';
import FotoTesting from '../assets/photo.jpg';

const BiodataDisplay = ({ data }) => {
    if (!data) return null;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                {/* Kolom untuk menampilkan data biodata */}
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1 max-w-[800px]">
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Nama Lengkap</span> {data.nama_lengkap}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Email</span> {data.email}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Gender</span> {data.gender}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Tempat Lahir</span> {data.tempat_lahir}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Tanggal Lahir</span> {new Date(data.tanggal_lahir).toLocaleDateString()}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Nomor Telepon</span> {data.nomor_telepon}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Jabatan</span> {data.id_jabatan}
                    </p>
                    <p className="border-b border-gray-200 py-3">
                        <span className="font-bold min-w-[150px] inline-block text-black">Alamat</span> {data.alamat}
                    </p>
                </div>

                {/* Kolom untuk menampilkan gambar */}
                <div className="flex-1 h-full max-w-[300px]">
                    <div className="bg-white shadow-md rounded p-6 h-full flex items-center justify-center overflow-hidden">
                        <img
                            src={FotoTesting} // Ganti dengan properti yang sesuai dari data, misalnya `data.foto`
                            alt="Foto Profil"
                            className="w-full h-full max-h-[400px] object-cover object-center aspect-[3/4] rounded"
                        />
                    </div>
                    <div className="mt-2">
                        <button className="bg-colors-primary text-colors-accent px-6 py-2 mt-3 w-full">Edit Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Data = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            console.log(user);
            if (user?.username) {
                try {
                    const response = await API.get(`/api/emp/data/${user.username}`, {
                        headers: {
                            Authorization: `Bearer ${user.token}`, // Gunakan token dari AuthContext
                        },
                    });
                    setData(response.data);
                } catch (error) {
                    console.error('Error:', error);
                    setError('Gagal mengambil data');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('Pengguna tidak ditemukan');
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-100">
            {data ? <BiodataDisplay data={data.data} /> : <p>Data tidak ditemukan.</p>}
        </div>
    );
};

export default Data;