import React from 'react'
import ExperienceDestru from './ExperienceDestru'
import styles from './Experience.module.css'

const Experience = () => {
    return (
        <>
            <div className={styles.experience_container}>
                <h3 className={styles.experience_title}>
                    Experience
                </h3>
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
                        <ExperienceDestru
                            position='Software Developer ' company=' No-country'
                            companyLink='www'
                            time='2022' address='Colombia'
                            work='Trabajé en un equipo responsable del desarrollo de un proyecto de final, incluida la implementación de nuevas funciones, como recomendaciones de servicios de trabajadores.'
                        />
                    </ul>
                </div>
            </div>
            <div className={styles.experience_container}>
                <h3 className={styles.experience_title}>
                    Education
                </h3>
                <div>
                    <ul>
                        <ExperienceDestru
                            position='Fundamentos de Programacion Python'
                            time='2021-2021' address='Colombia'
                            work='Curso de formacion en el componente basico de Fundamentos de programacion Python. los cursos incluyen estructuras de datos y algoritmos'
                        />
                        <ExperienceDestru
                            position='Desarrollo de Aplicaciones Web '
                            time='2021-2021' address='Colombia'
                            work='curso con exuto en desarrollo de Aplicaiones web de mision TIC 2022. los cursos incluyen estructuras de datos y algoritmos'
                        />
                        <ExperienceDestru
                            position='Cursos En Línea'
                            time='2022- Actualmente en Curso' address='Colombia'
                            work='Cursos completos en temas  como aprendizaje por refuerzo, Los cursos relevantes incluyeron estructuras de datos y algoritmos,Analisis de Datos, Ciencia de Datos informáticos e inteligencia artificial '
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience