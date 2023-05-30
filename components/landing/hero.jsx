import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src='/logo.svg' alt='Cooper' className='w-28 object-contain' />
            
            <div className="flex space-x-4">
            <Link href="https://tally.so/r/woD9GX" className="text-black flex justify-center items-center bg-white py-2 px-4 rounded-md">Registrarme</Link>

            <Link href="https://tally.so/r/woD9GX" className="text-white flex justify-center items-center bg-black py-2 px-4 rounded-md">¡Iniciar sesión!</Link>
            </div>

            </nav>
    
            <h1 className='head_text'>
            Tu copiloto en la universidad <br className='max-md:hidden' />
            <span className='orange_gradient '>Chatea, resume y practica</span>
            </h1>
            <h2 className='desc'>
            Todas tus lecturas en un solo lugar.
            <br />
            Una experiencia de aprendizaje como nunca antes la habías vivido.
            </h2>
        </header>
    );
};

export default Hero;
