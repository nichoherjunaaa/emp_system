import React from 'react';

const Home = () => {
    console.log('Home component rendered'); // Periksa apakah komponen di-render
    return (
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
                <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
                    DAISY
                </div>
            </div>
            <div className="diff-item-2">
                <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
            </div>
            <div className="diff-resizer"></div>
        </div>
    );
};

export default Home;