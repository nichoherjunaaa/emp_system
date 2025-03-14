import React from "react";
import FormInput from "./FormInput";
import { GiGraduateCap } from "react-icons/gi";
import Logo from "../assets/logo/usd.png";

const FormAuth = () => {

    const handleLogin = () => {
        console.log("Login Berhasil");

    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-[url('./assets/background/usd-bg.jpg')] bg-cover bg-center p-4">
            {/* Overlay Transparan */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Card dengan responsivitas */}
            <div className="relative w-full max-w-5xl h-auto md:h-[80vh] grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-lg overflow-hidden bg-white">
                {/* Bagian Kiri (Putih) */}
                <div className="flex flex-col items-center mt-5 bg-white p-8 md:p-12 justify-start h-full">
                    <img src={Logo} alt="USD Logo" className="w-40 md:w-56 self-center" />
                    <h1 className="text-2xl md:text-3xl text-center font-bold text-black mt-5">
                        Selamat Datang di SIA USD
                    </h1>
                    <p className="text-black text-justify mt-5">
                        Sistem Informasi Akademik Universitas Sanata Dharma menyediakan layanan manajemen akademik bagi mahasiswa, dosen, dan staf guna mendukung proses pendidikan yang lebih efektif dan efisien.
                    </p>
                </div>

                {/* Bagian Kanan (Orange) */}
                <div className="flex flex-col gap-6 items-center justify-center bg-[var(--primary)] p-8 md:p-12">
                    <div className="flex items-center gap-2">
                        <GiGraduateCap className="w-12 h-12 md:w-14 md:h-14 text-white" />
                        <h1 className="font-semibold text-2xl md:text-4xl text-white">SIA USD</h1>
                    </div>
                    <FormInput label="NIM" name="nim" type="text" />
                    <FormInput label="Password" name="password" type="password" />
                    <button className="bg-blue-600 w-full rounded-full btn p-6 border-none text-lg" onClick={handleLogin}>Masuk</button>
                </div>
            </div>
        </div>
    );
};

export default FormAuth;
