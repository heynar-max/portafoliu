import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiTableau } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import styles from './Icon.module.css'

export const GithubProject = () => {
    return (
        <div className={styles.githubProjects}><IoLogoGithub/></div>
    )
}
export const Mongo = () => {
    return (
        <div className={styles.mongo}><SiMongodb/></div>
    )
}
export const ReactL = () => {
    return (
        <div className={styles.reactl}><SiReact/></div>
    )
}
export const PythonL = () => {
    return (
        <div className={styles.pythonl}><SiPython/></div>
    )
}
export const Html = () => {
    return (
        <div className={styles.html}><SiHtml5/></div>
    )
}
export const Css = () => {
    return (
        <div className={styles.css}><SiCss3/></div>
    )
}
export const Mysql = () => {
    return (
        <div className={styles.mysql}><SiMysql/></div>
    )
}
export const TableauL = () => {
    return (
        <div className={styles.tableaul}><SiTableau/></div>
    )
}




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

