import React from 'react'
import { Css, Excel, Html, Mongo, Mysql, Powerbi, PythonL, ReactL, TableauL } from '../icon'
import Layout from '../layout/Layout'
import styles from './Skill.module.css'

const Skills = () => {
    return (
        <>
            <Layout>
            <h1 className={styles.skill_flex}>Skills</h1>
            <div className={styles.skill_container}>
                <div className={styles.skill_container_individual}>
                    <ReactL/>
                    <h2 className={styles.skill_text}>React</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <PythonL/>
                    <h2 className={styles.skill_text}>Python</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Html/>
                    <h2 className={styles.skill_text}>Html</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Css/>
                    <h2 className={styles.skill_text}>Css</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Mysql/>
                    <h2 className={styles.skill_text}>Mysql</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Mongo/>
                    <h2 className={styles.skill_text}>Mongo</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <TableauL/>
                    <h2 className={styles.skill_text}>Tableau</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Excel/>
                    <h2 className={styles.skill_text}>Excel</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Powerbi/>
                    <h2 className={styles.skill_text}>Power Bi</h2>
                </div>
            </div>
            </Layout>
        </>
    )
}

export default Skills