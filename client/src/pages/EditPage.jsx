import React, { useState } from 'react';
import { toast } from 'react-toastify';
import FormInput from './../components/Form/FormInput';
import API from './../api';

const EditPage = ({ data, onCancel, isAdmin }) => {
    const [formData, setFormData] = useState({
        nama_lengkap: data?.nama_lengkap || '',
        nip_karyawan: data?.nip_karyawan || '',
        email: data?.email || '',
        gender: data?.gender || '',
        tempat_lahir: data?.tempat_lahir || '',
        tanggal_lahir: data?.tanggal_lahir || '',
        nomor_telepon: data?.nomor_telepon || '',
        alamat: data?.alamat || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData.email);
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Membersihkan formData agar tidak mengirim properti kosong
        const cleanedData = Object.entries(formData).reduce((acc, [key, value]) => {
            if (value !== "" && value !== null && value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
    
        try {
            const response = await API.put(`/auth`, cleanedData);
            console.log(response.data);
            toast.success('Data berhasil diperbarui');
            onCancel();
        } catch (error) {
            console.error("Error updating data:", error);
            toast.error(error?.response?.data?.message || 'Terjadi kesalahan');
        }
    };

    return (
        <form className="p-4 bg-white rounded-lg shadow-lg mt-10" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Edit Biodata</h2>
            <div className="grid grid-cols-2 gap-4">
                <FormInput label="Nama Lengkap" name="nama_lengkap" type="text" defaultValue={formData.nama_lengkap} onChange={handleChange} required />
                {isAdmin && (
                    <>
                        <FormInput label="NIP" name="nip_karyawan" type="text" defaultValue={formData.nip_karyawan} onChange={handleChange} required />
                        <label className="form-control">
                            <span className="label-text capitalize text-gray-400">Jenis Kelamin</span>
                            <select name="gender" value={formData.gender} onChange={handleChange} className="select select-bordered mt-2 w-full">
                                <option value="">Pilih</option>
                                <option value="Pria">Pria</option>
                                <option value="Wanita">Wanita</option>
                            </select>
                        </label>
                        <FormInput label="Tanggal Lahir" name="tanggal_lahir" type="date" defaultValue={formData.tanggal_lahir} onChange={handleChange} />
                        <FormInput label="Tempat Lahir" name="tempat_lahir" type="text" defaultValue={formData.tempat_lahir} onChange={handleChange} />
                    </>
                )}
                <FormInput label="Email" name="email" type="email" defaultValue={formData.email} onChange={handleChange} required />
                <FormInput label="Nomor Telepon" name="nomor_telepon" type="text" defaultValue={formData.nomor_telepon} onChange={handleChange} />
                <label className="form-control">
                    <span className="label-text capitalize text-gray-400">Alamat</span>
                    <textarea name="alamat" value={formData.alamat} onChange={handleChange} className="textarea textarea-bordered mt-2 w-full" rows="3"></textarea>
                </label>
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <button type="button" className="btn btn-secondary" onClick={onCancel}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan</button>
            </div>
        </form>
    );
};

export default EditPage;
