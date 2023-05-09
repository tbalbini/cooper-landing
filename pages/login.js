import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '../components/login/login.jsx'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Login/>
        </div>
    )
}