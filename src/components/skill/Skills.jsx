import React from 'react'
import { Css, Html, Mongo, Mysql, PythonL, ReactL, TableauL } from '../icon'
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
                    <h2>React</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <PythonL/>
                    <h2>Python</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Html/>
                    <h2>Html</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Css/>
                    <h2>Css</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Mysql/>
                    <h2>Mysql</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <Mongo/>
                    <h2>Mongo</h2>
                </div>
                <div className={styles.skill_container_individual}>
                    <TableauL/>
                    <h2>Tableau</h2>
                </div>
            </div>
            </Layout>
        </>
    )
}

export default Skills