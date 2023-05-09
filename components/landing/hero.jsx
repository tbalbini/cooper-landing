import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src='/logo.svg' alt='Cooper' className='w-28 object-contain' />
    
            <Link href="https://tally.so/r/woD9GX" className="black_btn">Early Access</Link>

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
