import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubProject } from '../icon'
import styles from './Article.module.css'

const Article = ({type, title, summary, img, link, github}) => {
    return (
        <article className={styles.article_container}>
            <div className={styles.article_flex}>
            <Link href={link} target="_blank" >
                <Image className={styles.article_img} src={img} alt={title} priority={true}/>
            </Link>
            <div>
                <span className={styles.article_span}>{type}</span>
                <Link href={link} target="_blank">
                <h2 className={styles.article_title}>{title}</h2>
                </Link>
                <p className={styles.article_parrafo}>{summary}</p>
            <div>
            <Link href={github} target="_blank"> <GithubProject/> </Link>
            <Link href={link} target="_blank"> Visita el proyecto </Link>
            </div>
            </div>
            </div>
        </article>
    )
}

export default Article