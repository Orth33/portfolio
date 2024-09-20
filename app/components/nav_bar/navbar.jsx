"use client"
import { React, useState } from 'react';
import './navbar.css'
export default function NavBar() {

    const [actions, setactions] = useState([
        'About',
        'Projects',
        'Contact'
    ]);

    function navHandler(item) {
        switch (item) {
            case "About":
                window.scrollTo({
                    top: '580',
                    behavior: 'smooth'
                })
                break;

            case 'Projects':
                window.scrollTo({
                    top: '800',
                    behavior: 'smooth'
                })
                break;

            case 'Contact':
                window.scrollTo({
                    top: '1000',
                    behavior: 'smooth'
                })
                break;
        }
    }

    return (
        <main className='w-full h-12 flex flex-row justify-center items-center gap-3'>
            {actions.map((item, index) => (
                <div key={index} className='nav_action' onClick={() => navHandler(item)}>
                    {item}
                </div>
            ))}

        </main>
    )
}