import React from 'react'
import Hero from '../assets/hero.jpg'
const HomePage = () => {
    return (
            <div className="hero bg-base-200 flex justify-center my-6 py-10 w-7xl items-center">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={Hero}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="flex flex-col gap-3">
                        <h1 className="text-5xl font-bold">Selamat Datang di Sistem<br/><span className="flex mt-4">Informasi SMAN 1 Ngayal   </span></h1>
                        <p className="py-6">
                            Segala informasi sekolah akan disampaikan melalui laman sistem informasi SMAN 1 Ngayal
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default HomePage