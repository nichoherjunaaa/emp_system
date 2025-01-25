import React, { useState, useEffect } from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './Form/FormInput';

const FormAuth = () => {
    return (
        <div className="h-screen grid place-items-center">
            <Form method="POST" className="card lg:w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4 w-80">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                {/* {isRegister && <FormInput type="text" name="name" label="Username" />} */}
                <FormInput type="text" name="nip_karyawan" label="Username" />
                <FormInput type="password" name="password" label="Password" />
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
            </Form>
        </div>
    );
};

export default FormAuth;
