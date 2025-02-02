import React, { useState, useEffect } from 'react';
import API from '../api';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormEdit from './../components/FormEdit';

const BiodataPage = () => {
    const [data, setData] = useState(null);
    const [isEditing, setIsEditing] = useState(false); 
    const user = useSelector((state) => state.userState.user);
    const navigate = useNavigate();

    const getData = async () => {
        if (!user) {
            toast.error('Anda harus login terlebih dahulu');
            navigate('/'); 
            return;
        }
        try {
            const { data } = await API.get('/auth/current/user');
            setData(data.data);
        } catch (error) {
            const errMsg = error?.response?.data?.message;
            toast.error(errMsg);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex flex-col gap-3 bg-base-300 w-7xl px-8">
            {isEditing ? (
                <FormEdit data={data} onCancel={handleCancelEdit} />
            ) : (
                <>
                    <div className="flex justify-center items-center">
                        <div className="mt-8 flex flex-col gap-6 px-5 w-full justify-center">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                <span>Nama Lengkap</span>
                                <span>: {data?.nama_lengkap || "Tidak tersedia"}</span>
                                <span>NIP</span>
                                <span>: {data?.nip_karyawan || "Tidak tersedia"}</span>
                                <span>Email</span>
                                <span>: {data?.email || "Tidak tersedia"}</span>
                                <span>Jenis Kelamin</span>
                                <span>: {data?.gender || "Tidak tersedia"}</span>
                                <span>Tempat dan Tanggal Lahir</span>
                                <span>: {data?.tempat_lahir && data?.tanggal_lahir
                                    ? `${data.tempat_lahir}, ${data.tanggal_lahir}`
                                    : "Tidak tersedia"}
                                </span>
                                <span>Nomor Telepon</span>
                                <span>: {data?.nomor_telepon || "Tidak tersedia"}</span>
                                <span>Alamat</span>
                                <span>: {data?.alamat || "Tidak tersedia"}</span>
                            </div>
                        </div>
                        <div className="flex mt-8 w-full border-black relative justify-center items-center">
                            <img
                                src={data?.photo || "default-profile.png"}
                                alt="photo"
                                className="absolute w-80 h-80 object-cover rounded-md mt-10"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="btn btn-primary px-4 mx-5 mt-10" onClick={handleEditClick}>
                            Edit Data
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BiodataPage;
