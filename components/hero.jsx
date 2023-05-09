import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src='/logo.svg' alt='Cooper' className='w-28 object-contain' />
    
            <Link href="/login" className="black_btn">Login</Link>

            </nav>
    
            <h1 className='head_text'>
            All your readings in one place. <br className='max-md:hidden' />
            <span className='orange_gradient '>Keep it simple</span>
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
