import { React } from 'react';
import './about.css';
export default function About({ title, value }) {
    return (
        <main className='about_main w-80 h-48 text-[--colorText]'>
            <div className='py-6'>
                {title}
            </div>

            <div className='text-black'>
                {value}
            </div>
        </main>
    )
}