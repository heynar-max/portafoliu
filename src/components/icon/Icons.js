import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiTableau } from "react-icons/si";
import styles from './Icon.module.css'

export const Github = () => {
    return (
        <div className={styles.github}><IoLogoGithub/></div>
    )
}
export const Tableau = () => {
    return (
        <div className={styles.tableau}><SiTableau/></div>
    )
}
export const Linkend = () => {
    return (
        <div className={styles.linkedin}><IoLogoLinkedin/></div>
    )
}

