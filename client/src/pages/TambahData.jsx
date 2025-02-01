import React from 'react';
import FormInput from '../components/Form/FormInput';
import FormText from './../components/Form/FormText';
import FileInput from './../components/Form/FileInput';
import API from './../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const TambahData = () => {
    const navigate = useNavigate();
    const inputFields = [
        { name: 'nip_karyawan', label: 'NIP Karyawan', type: 'text' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'nama_lengkap', label: 'Nama Lengkap', type: 'text' },
        { name: 'nomor_telepon', label: 'Nomor Telepon', type: 'text' },
    ];
    
    const additionalFields = [
        { name: 'gender', label: 'Jenis Kelamin', type: 'text' },
        { name: 'tempat_lahir', label: 'Tempat Lahir', type: 'text' },
        { name: 'tanggal_lahir', label: 'Tanggal Lahir', type: 'date' },
        { name: 'id_jabatan', label: 'Jabatan', type: 'text' },
    ];
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData)
            const response = await API.post('/auth/register', data);
            toast.success('Data berhasil ditambahkan');
            e.target.reset();
            navigate('/system/karyawan');
        } catch (error) {
            const errMsg = error?.response?.data?.message;
            toast.error("Gagal menambahkan data !");
        }
    }
    
    const FormSection = ({ fields }) => (
        <div className="flex flex-col gap-y-4 bg-base-300 p-6 rounded-md w-full">
            {fields.map(({ name, label, type }) => (
                <FormInput key={name} type={type} name={name} label={label} />
            ))}
        </div>
    );
    
    const ExtraSection = () => (
        <div className="flex flex-col gap-y-4 bg-base-300 p-6 rounded-md w-full">
            <FileInput type="file" name="photo" label="Photo" />
            <FormText name="alamat" label="Alamat" />
        </div>
    );
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="flex h-screen flex-col p-8 gap-y-6 justify-center items-center">
                <div className="w-full grid grid-cols-3 px-10 gap-x-7">
                    <FormSection fields={inputFields} />
                    <FormSection fields={additionalFields} />
                    <ExtraSection />
                </div>
                <div className="w-xl px-10">
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default TambahData;
