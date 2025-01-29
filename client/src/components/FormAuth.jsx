import React, { useState, useEffect } from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './Form/FormInput';

const FormAuth = ({ isRegister }) => {
    return (
        <div className="h-screen grid place-items-center">
            <Form method="POST" className="card lg:w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4">
                {isRegister ? (
                    <h4 className="text-center text-3xl font-bold">Tambah Karyawan</h4>
                ) : (
                    <h4 className="text-center text-3xl font-bold">Login</h4>
                )}
                {/* {isRegister && <FormInput type="text" name="name" label="Username" />} */}
                <FormInput type="text" name="nip_karyawan" label="Username" />
                <FormInput type="password" name="password" label="Password" />
                <FormInput type="text" name="nama_lengkap" label="Nama Lengkap" />
                <FormInput type="email" name="email" label="Email" />
                <FormInput type="gender" name="gender" label="Gender" />
                <FormInput type="text" name="tempat_lahir" label="Tempat Lahir" />
                <FormInput type="date" name="tanggal_lahir" label="Tanggal Lahir" />
                <FormInput type="text" name="id_jabatan" label="jabatan" />
                <div className="mt-4">
                {isRegister ? (
                    <button type="submit" className="btn btn-primary btn-block">Tambahkan</button>
                ) : (
                    <button type="submit" className="btn btn-primary btn-block">Login</button>                    
                )}
                </div>
            </Form>
        </div>
    );
};

export default FormAuth;
