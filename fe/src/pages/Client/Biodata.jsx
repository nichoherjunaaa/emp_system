import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Biodata = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            try {
                const parsedUserData = JSON.parse(storedUserData);
                const username = parsedUserData.username;

                axios.get(`http://localhost:3001/api/emp/data/${username}`)
                    .then((response) => {
                        setUserData(response.data);
                    })
                    .catch((err) => {
                        console.error("Error fetching user data:", err);
                        setError('Gagal mengambil data pengguna');
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
                setError('Data pengguna tidak valid');
                setLoading(false);
            }
        } else {
            setError('Pengguna tidak ditemukan dalam localStorage');
            setLoading(false);
        }
    }, []);

    return (
        <div>
            <h1>Client Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div>
                    <p>Nama Lengkap : {userData.data.nama_lengkap}</p>
                    <p>Email : {userData.data.email}</p>
                    <p>Gender : {userData.data.gender}</p>
                    <p>Job : {userData.data.id_jabatan}</p>
                    <p>Tempat Lahir : {userData.data.tempat_lahir}</p>
                    <p>Tanggal Lahir : {userData.data.tanggal_lahir}</p>
                    <p>No. Telepon : {userData.data.nomor_telepon}</p>
                    <p>Alamat : {userData.data.alamat}</p>
                </div>
            )}
        </div>
    );
}

export default Biodata
