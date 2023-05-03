import React from 'react'
import ExperienceDestru from './ExperienceDestru'
import styles from './Experience.module.css'

const Experience = () => {
    return (
        <>
            <div className={styles.experience_container}>
                <h2>
                    Experience
                </h2>
                <div>
                    <ul>
                        <ExperienceDestru
                            position='Software Developer ' company='Proyecto hackathon'
                            companyLink='www'
                            time='2021' address='Colombia'
                            work='Trabajé en un equipo responsable del desarrollo de un proyecto de hackathon, incluida la implementación de nuevas funciones, como recomendaciones de servicios de trabajadores.'
                        />
                        <ExperienceDestru
                            position='Software Developer ' company='Proyecto grupal'
                            companyLink='www'
                            time='2021' address='Colombia'
                            work='Trabajé en un equipo responsable del desarrollo de un proyecto de final, incluida la implementación de nuevas funciones, como recomendaciones de servicios de trabajadores.'
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience