import React from 'react';
import CompanyImg from '../assets/gedung.jpg'
const AboutPage = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Judul Halaman */}
                <h1 className="text-4xl font-bold text-center text-primary mb-8">Tentang Kami</h1>
                <div className="flex justify-center">
                    <img src={CompanyImg} alt="photo" className="rounded-lg shadow-lg mb-8 w-2xl" />
                </div>
                {/* Deskripsi Perusahaan */}
                <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Siapa Kami?</h2>
                    <p className="text-base-content">
                        Kami adalah perusahaan teknologi terkemuka yang berfokus pada pengembangan solusi inovatif untuk bisnis dan masyarakat. Dengan pengalaman lebih dari 10 tahun, kami telah membantu ratusan klien mencapai tujuan mereka melalui layanan berkualitas tinggi dan tim profesional.
                    </p>
                </div>

                {/* Visi dan Misi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Visi */}
                    <div className="bg-base-100 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-primary mb-4">Visi</h2>
                        <p className="text-base-content">
                            Menjadi pemimpin global dalam menyediakan solusi teknologi yang mengubah dunia dan memberikan dampak positif bagi masyarakat.
                        </p>
                    </div>

                    {/* Misi */}
                    <div className="bg-base-100 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-primary mb-4">Misi</h2>
                        <ul className="list-disc list-inside text-base-content">
                            <li>Mengembangkan produk dan layanan inovatif.</li>
                            <li>Memberikan solusi yang ramah pengguna dan berkelanjutan.</li>
                            <li>Membangun kemitraan yang saling menguntungkan dengan klien dan mitra.</li>
                        </ul>
                    </div>
                </div>

                {/* Tim Inti */}
                <div className="bg-base-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Tim Kami</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Anggota Tim 1 */}
                        <div className="card bg-base-200 shadow-md">
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold text-primary">John Doe</h3>
                                <p className="text-base-content">CEO & Pendiri</p>
                                <p className="text-sm text-base-content">
                                    John adalah seorang visioner dengan lebih dari 15 tahun pengalaman di industri teknologi.
                                </p>
                            </div>
                        </div>

                        {/* Anggota Tim 2 */}
                        <div className="card bg-base-200 shadow-md">
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold text-primary">Jane Smith</h3>
                                <p className="text-base-content">CTO</p>
                                <p className="text-sm text-base-content">
                                    Jane adalah ahli dalam pengembangan perangkat lunak dan manajemen proyek.
                                </p>
                            </div>
                        </div>

                        {/* Anggota Tim 3 */}
                        <div className="card bg-base-200 shadow-md">
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold text-primary">Michael Johnson</h3>
                                <p className="text-base-content">Kepala Pemasaran</p>
                                <p className="text-sm text-base-content">
                                    Michael memiliki keahlian dalam strategi pemasaran digital dan branding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;