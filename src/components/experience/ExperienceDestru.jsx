import React from 'react'
import styles from './Experience.module.css'

const ExperienceDestru = ({position, company, companyLink, time, address, work}) => {
    return (
        <li className={styles.detalle_container}>
            <article className={styles.detalle_article}>
                <h3 className={styles.detalle_subtitule}>{position}&nbsp; <a href={companyLink} 
                target='_blank'
                className={styles.detalle_link}
                >
                    {company}</a></h3>
                <span className={styles.detalle_span}>
                    {time} | {address}
                </span>
                <p>
                    {work}
                </p>
            </article>
        </li>
    )
}

export default ExperienceDestru