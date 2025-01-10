import React from 'react';
import HomeImg from '../assets/home.jpg'
const Home = () => {
    console.log('Home component rendered'); // Periksa apakah komponen di-render
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-4">
                        <h1 className="text-4xl font-bold text-colors-primary">Welcome to Hospital System</h1>
                        <p className="text-gray-700 mb-4 pt-4">
                            Seluruh informasi bagi karyawan di Hospital akan diberikan melalui sistem ini.
                        </p>
                        <button className="bg-colors-primary text-colors-accent px-6 py-2 rounded-full">Guide</button>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-900"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-blue-900"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-blue-900"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                    <div className="md:w-2/3 p-4 flex justify-center">
                        <img src={HomeImg} alt="Illustration of people working on web design" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;