import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Username dan Password tidak boleh kosong!');
            setSuccess(false)
            return;
        }

        setLoading(true);

        const payload = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', payload);
            console.log(response);

            // console.log(response.data.token);

            if (response.data.token && response.data.username && response.data.role) {
                localStorage.setItem('userData', JSON.stringify({
                    username: response.data.username,
                    role: response.data.role
                }));
                localStorage.setItem('token', response.data.token);
                setSuccess(true);
                navigate('/dashboard'); // Navigate to dashboard
            } else {
                setError('Login gagal, token tidak ditemukan!');
                setSuccess(false);
            }

            // Clear input fields
            setUsername('');
            setPassword('');
            setError('');
        } catch (error) {
            console.error(error);
            setError('Login gagal, coba lagi!');
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center p-4 w-full relative">
            {loading && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}

            <div className="container flex justify-center items-center flex-col gap-4 border border-gray-300 p-6 rounded-md shadow-lg w-[400px]">
                <form onSubmit={handleSubmit} className="w-full">
                    {/* Input Username */}
                    <label className="input input-bordered flex items-center gap-2 px-2 py-1 border-2 w-full mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                            type="text"
                            className="grow border-none"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 px-2 py-1 border-2 w-full mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="password"
                            className="grow border-none"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    {success && (
                        <div role="alert" className="alert alert-success mb-4 w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Your login was successful!</span>
                        </div>
                    )}
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn flex items-center gap-2 px-2 py-1 border-2 w-full"
                        disabled={loading} // Disable button when loading
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
