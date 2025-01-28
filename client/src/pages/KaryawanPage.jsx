import React, { useEffect, useState } from 'react';
import API from './../api';

const KaryawanPage = () => {
    const [result, setResult] = useState([]);

    const getData = async () => {
        try {
            const { data } = await API.get('/auth/all-users');
            setResult(data.data);
            // console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // const handleTambah = async (e) => { 
    //     e.preventDefault();
    //     const response = 
    // }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex w-full justify-center bg-base-300 p-4">
            <div className="overflow-x-auto w-full">
                <div className="flex justify-end mx-5">
                    <button className="btn btn-primary btn-sm">Tambah Data</button>
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
                                    <button className="btn btn-warning btn-sm w-14">Edit</button>
                                    <button className="btn btn-error btn-sm w-14">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default KaryawanPage;
