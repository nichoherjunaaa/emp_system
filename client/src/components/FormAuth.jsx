import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import FormInput from './Form/FormInput';
import FormText from './Form/FormText';

const FormAuth = () => {
    return (
        <div className={`h-screen grid place-items-center`}>
            <Form
                method="POST"
                className="card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4">
                <div className="flex justify-center items-center">
                    <h4 className="font-bold text-3xl">LOGIN</h4>
                </div>
                <FormInput type="text" name="nip_karyawan" label="Username" />
                <FormInput type="password" name="password" label="Password" />



                <div className="mt-4">
                    <button type="submit" className="btn btn-primary btn-block" >
                        LOGIN
                    </button>
                </div>
            </Form>
        </div >
    );
};

export default FormAuth;
