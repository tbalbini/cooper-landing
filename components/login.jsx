import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        // Aquí puedes agregar la lógica de autenticación
    };

    return (
        <div className="max-w-sm mx-auto mt-20">
        <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg shadow-lg p-20">
            <div>
                <img src="/ojos.svg" alt="Logo" className="w-17 mx-auto mb-5" />
            </div>
            <h1 className="text-2xl text-center font-bold mb-4">Iniciar sesión</h1>
            <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">Usuario:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} className="w-full border border-gray-300 px-4 py-2 rounded-lg" />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} className="w-full border border-gray-300 px-4 py-2 rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-black hover:shadow-lg active:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">Iniciar sesión</button>
        </form>
        <div className="text-center mt-4">
            <p>¿No tienes una cuenta?</p>
            <Link href="/register" className="text-black-500 font-bold underline hover:text-gray-700 active:text-gray-700">Regístrate</Link>
        </div>
        </div>
    );
};

export default Login;
