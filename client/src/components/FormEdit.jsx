import React, { useState } from 'react';
import API from './../api';
import { toast } from 'react-toastify';

const FormEdit = ({ data, onCancel }) => {
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
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.put('/auth', formData);
            console.log(response);
            toast.success('Data berhasil diperbarui');
            onCancel(); // Tutup formulir setelah sukses
        } catch (error) {
            const errMsg = error?.response?.data?.message;
            toast.error(errMsg);
        }
    };

    return (
        <form className="p-4 bg-white rounded-lg shadow-lg mt-10" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Edit Biodata</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                    <input
                        type="text"
                        name="nama_lengkap"
                        value={formData.nama_lengkap}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                {/* <div>
                    <label className="block text-sm font-medium mb-1">NIP</label>
                    <input
                        type="text"
                        name="nip_karyawan"
                        value={formData.nip_karyawan}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div> */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                {/* <div>
                    <label className="block text-sm font-medium mb-1">Jenis Kelamin</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                    >
                        <option value="">Pilih</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div> */}
                {/* <div>
                    <label className="block text-sm font-medium mb-1">Tempat Lahir</label>
                    <input
                        type="text"
                        name="tempat_lahir"
                        value={formData.tempat_lahir}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div> */}
                {/* <div>
                    <label className="block text-sm font-medium mb-1">Tanggal Lahir</label>
                    <input
                        type="date"
                        name="tanggal_lahir"
                        value={formData.tanggal_lahir}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div> */}
                <div>
                    <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                    <input
                        type="text"
                        name="nomor_telepon"
                        value={formData.nomor_telepon}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Alamat</label>
                    <textarea
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        rows="3"
                    ></textarea>
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}
                >
                    Batal
                </button>
                <button type="submit" className="btn btn-primary">
                    Simpan
                </button>
            </div>
        </form>
    );
};

export default FormEdit;
