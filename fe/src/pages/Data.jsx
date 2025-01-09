import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import API from '../api/api';

const BiodataDisplay = ({ data }) => {
    if (!data) return null;

    return (
        <div>
            <p>Nama Lengkap : {data.nama_lengkap}</p>
            <p>Email : {data.email}</p>
            <p>Gender : {data.gender}</p>
            <p>Tempat Lahir : {data.tempat_lahir}</p>
            <p>Tanggal Lahir : {new Date(data.tanggal_lahir).toLocaleDateString()}</p>
            <p>Nomor Telepon : {data.nomor_telepon}</p>
            <p>Jabatan : {data.id_jabatan}</p>
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
            if (user?.username) {
                try {
                    const response = await API.get(`http://localhost:3001/api/emp/data/${user.username}`);
                    setData(response.data);
                } catch (error) {
                    console.error('Error:', error);
                    setError('Failed to fetch data');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('User not found');
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Biodata</h1>
            {data ? <BiodataDisplay data={data.data} /> : <p>No data available</p>}
        </div>
    );
};

export default Data;