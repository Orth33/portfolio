import { React } from 'react';
import './project.css'
export default function Project({ img, title, description, onClick }) {

    return (
        <main className='project_main' onClick={onClick}>
            <div
                className='project_container'>
                <img role='project_img' src={img} />
                <h1 className='project_title'>{title}</h1>
                <p className='project_des'>{description}</p>
            </div>
        </main>

    )
}