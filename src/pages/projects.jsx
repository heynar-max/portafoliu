import Projects from '@/components/projects/Projects'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'
import developer from '../../public/image/developer.png'

const projects = () => {
    return (
        <>
        <Head>
            <title>Proyectos</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <main>
            <div>
                <h1>Imaginación Triunfos ¡Conocimiento!</h1>
            <div>
                <div className={styles.project_container}>
                    <Projects
                    title="prueba titulo"
                    img={developer}
                    summary="este en un ensayo de un parrafo"
                    link="/"
                    github="/"
                    type="proyectos feactud"
                    />
                
                    <Projects
                    title="prueba titulo"
                    img={developer}
                    summary="este en un ensayo de un parrafo"
                    link="/"
                    github="/"
                    type="proyectos feactud"
                    />
                
                    <Projects
                    title="prueba titulo"
                    img={developer}
                    summary="este en un ensayo de un parrafo"
                    link="/"
                    github="/"
                    type="proyectos feactud"
                    />
                </div>
            </div>
            </div>

        </main>
    </>
    )
}

export default projects