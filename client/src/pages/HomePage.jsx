import React from 'react';
import TextFieldReadOnly from '../components/TextField';
import Profile from '../assets/photos/profile.jpg'
import TextArea from './../components/TextArea';
const HomePage = () => {
    return (
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <div className="flex items-center justify-between gap-[30px]">
                {/* <form action="" className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <input type="text" name="search" id="search" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]" placeholder="Search course, student, other file..." />
                    <im gsrc="assets/images/icons/search-normal.svg" className="w-6 h-6" alt="icon" />
                </form> */}
                <div className="relative flex items-center justify-end gap-[14px] w-full">
                    <div className="text-right">
                        <p className="font-semibold">Nicho Herjuna</p>
                        <p className="text-sm leading-[21px] text-[#838C9D]">Mahasiswa</p>
                    </div>
                    <button type="button" id="profileButton" className="flex shrink-0 w-[70px] h-[70px] rounded-full overflow-hidden">
                        <img src={Profile} className="w-full h-full object-cover" alt="profile photos" />
                    </button>
                    <div id="ProfileDropdown" className="absolute top-full hidden">
                        <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                            <li className="font-semibold"><a href="#">My Account</a></li>
                            <li className="font-semibold"><a href="#">Subscriptions</a></li>
                            <li className="font-semibold"><a href="#">Settings</a></li>
                            <li className="font-semibold"><a href="signin.html">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">Biodata</h1>
                    <p className="text-[#838C9D] mt-1">Grow your company quickly</p>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">Edit Profile</a>
                    <a href="" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">Export Data</a>
                </div>
            </header>
            <div className="flex w-full">
                <div className="w-1/2">
                    <TextFieldReadOnly label="Nama Lengkap" value="Nicho Herjuna" />
                    <TextFieldReadOnly label="NIM" value="235314122" />
                    <TextFieldReadOnly label="Program Studi" value="Informatika" />
                    <TextFieldReadOnly label="Fakultas" value="Sains dan Teknologi" />
                    <TextFieldReadOnly label="Email" value="nichoherjuna@gmail.com" />
                    <TextFieldReadOnly label="Nomor Telepon" value="081227631975" />
                    <TextArea label="Alamat" value="Ngijorejo, Gari, Wonosari, Gunungkidul"/>
                </div>
                <div className="w-1/2 flex justify-center p-12">
                    <img src={Profile} alt="Profile" className="w-2xl object-cover border border-gray-300" />
                </div>
            </div>
        </main>
    );
}

export default HomePage;
