import Image from 'next/image'
import { Inter } from 'next/font/google'
import Register from '../components/register'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Register/>
        </div>
    )
}