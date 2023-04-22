import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Github } from '../icon'
import styles from './Project.module.css'

const Projects = ({type, title, summary, img, link, github}) => {
    return (
        <article className={styles.project_container}>
            <div className={styles.project_flex}>
            <Link href={link} target="_blank" >
                <Image className={styles.project_img} src={img} alt={title}/>
            </Link>
            <div>
                <span>{type}</span>
                <Link href={link} target="_blank">
                <h2>{title}</h2>
                </Link>
                <p>{summary}</p>
            <div>
            <Link href={github} target="_blank"> <Github/> </Link>
            <Link href={link} target="_blank"> Visita el proyect </Link>
            </div>
            </div>
            </div>
        </article>
    )
}

export default Projects