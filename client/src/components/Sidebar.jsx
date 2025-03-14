import React from 'react';
import Logo from '../assets/logo/usd.png';
import CourseIcon from '../assets/icons/note-favorite-white.svg';
import HomeIcon from '../assets/icons/3dcube-white.svg';
import CategoryIcon from '../assets/icons/crown-white.svg';
import RencanaStudiIcon from '../assets/icons/security-card-white.svg'    

const Sidebar = () => {
    return (
        <div className="flex min-h-screen">
            <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[340px] my-[10px] ml-[10px] bg-white overflow-hidden flex flex-1 rounded-[20px]">
                <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
                    <nav className="flex flex-col w-full h-fit p-[30px] gap-8 z-10">
                        <img src={Logo} alt="logo" className="w-1/2 self-center" />
                        <h1 className="text-black text-center font-bold text-2xl">SIA USD</h1>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">GENERAL</p>
                            <li>
                                <a href="index.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={HomeIcon} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Beranda</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="manage-course.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                        <img src={CourseIcon} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Kelas</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={CategoryIcon} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Presensi</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="manage-student.html">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src="../assets/images/icons/profile-2user-white.svg" className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Biodata</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">OTHERS</p>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src={RencanaStudiIcon} className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Daftar Rencana Studi</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src="../assets/images/icons/cup-white.svg" className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Rewards</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img src="../assets/images/icons/setting-2-white.svg" className="w-6 h-6" alt="icon" />
                                        <span className="font-semibold text-white">Settings</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <img src="/assets/images/backgrounds/sidebar-glow.png" className="absolute object-contain object-bottom bottom-0" alt="background" />
            </aside>
        </div>

    );
};

export default Sidebar;
