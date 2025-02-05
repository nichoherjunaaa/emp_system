import React, { useEffect, useState } from 'react';
import API from './../api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditPage from './EditPage';

const KaryawanPage = () => {
    const [result, setResult] = useState([]);
    const [selectedKaryawan, setSelectedKaryawan] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = (karyawan) => {
        setSelectedKaryawan(karyawan);
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setSelectedKaryawan(null);
    };

    const getData = async () => {
        try {
            const { data } = await API.get('/auth/all-users');
            setResult(data.data);
            // console.log(data.data);
        } catch (error) {
            // console.log(error);
            toast.error('Terjadi kesalahan');
        }
    };

    const handleDelete = async (nip_karyawan) => {
        try {
            await API.delete(`/auth/delete / ${nip_karyawan}`)
            setResult(result.filter((item) => item.nip_karyawan !== nip_karyawan));
            // console.log('Data berhasil dihapus');
            toast.success('Data berhasil dihapus');
            getData();
        } catch (error) {
            // console.log(error);
            toast.error('Gagal menghapus data');
        }
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex w-full justify-center bg-base-300 p-4">
            {isEditing ? (
                <EditPage data={selectedKaryawan} onCancel={handleCancelEdit} isAdmin={true} />
            ) : (

                <div className="w-full">
                    <div className="flex justify-between mb-4">
                        <div className="flex gap-4 w-full justify-start mr-10">
                            {/* buatkan form input disini yang panjangnya bisa diatur*/}
                            <input type="text" placeholder="Cari Nama Karyawan" className="input w-full" />
                            <button className="btn btn-primary w-20">Cari</button>
                            <button className="btn btn-primary btn-md w-20">Filter</button>
                        </div>
                        <div className="flex justify-end mx-5">
                            <Link className="btn btn-primary btn-md w-30 ml-10" to="/tambah">Tambah Data</Link>
                        </div>
                    </div>
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Lengkap</th>
                                <th>NIP</th>
                                <th>Job</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Nomor Telepon</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((karyawan, index) => (
                                <tr key={index} className="text-md">
                                    <th>{index + 1}</th>
                                    <td>{karyawan.nama_lengkap}</td>
                                    <td>{karyawan.nip_karyawan}</td>
                                    <td>{karyawan.id_jabatan}</td>
                                    <td>{karyawan.gender}</td>
                                    <td>{karyawan.email}</td>
                                    <td>{karyawan.nomor_telepon}</td>
                                    <td className="flex justify-around">
                                        <button className="btn btn-warning btn-sm w-14" onClick={() => handleEditClick(karyawan)}>Edit</button>
                                        <button className="btn btn-error btn-sm w-14" onClick={() => handleDelete(karyawan.nip_karyawan)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default KaryawanPage; 